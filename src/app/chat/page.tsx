"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { session } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ChatMessage = { id: number; sender: "user" | "bot"; text: string };

export default function ChatPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!session.isLoggedIn()) {
      router.replace("/");
      return;
    }
    const load = async () => {
      const res = await fetch("/api/chat");
      const data = (await res.json()) as ChatMessage[];
      setMessages(data);
    };
    load();
  }, [router]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const speak = (text: string) => {
    if (typeof window === "undefined") return;
    try {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis?.speak(utterance);
    } catch {}
  };

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setInput("");

    // Optimistically add user message
    const tempId = Date.now();
    const userMsg: ChatMessage = { id: tempId, sender: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: trimmed }),
    });
    const bot = (await res.json()) as ChatMessage;
    setMessages((prev) => [...prev, bot]);
    speak(bot.text);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      void sendMessage();
    }
  };

  const logout = () => {
    session.clear();
    router.replace("/");
  };

  return (
    <div className="mx-auto flex h-[100dvh] max-w-screen-md flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Demo Chat</h1>
        <Button variant="outline" onClick={logout}>Log out</Button>
      </div>
      <div ref={listRef} className="bg-muted flex-1 overflow-y-auto rounded-md p-3">
        {messages.map((m) => (
          <div key={m.id} className={`mb-2 flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`${m.sender === "user" ? "bg-blue-600 text-white" : "bg-white"} max-w-[75%] rounded-lg px-3 py-2 shadow`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Type a message and hit Enter"
        />
        <Button onClick={sendMessage}>Send</Button>
      </div>
    </div>
  );
}


