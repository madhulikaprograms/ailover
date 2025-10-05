import { NextResponse } from "next/server";

let messages = [
  { id: 1, sender: "bot", text: "Hello! I'm your AI companion. How can I help you today?" },
  { id: 2, sender: "user", text: "Just testing this demo." },
  { id: 3, sender: "bot", text: "Great! Feel free to ask me anything. I'm here to chat, help, or just listen." },
];

export async function GET() {
  return NextResponse.json(messages);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message } = body ?? {};
    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const nextId = messages.length ? messages[messages.length - 1].id + 1 : 1;

    const userMsg = { id: nextId, sender: "user", text: String(message) };
    const responses = [
      `That's interesting! Tell me more about "${String(message)}".`,
      `I understand you're talking about "${String(message)}". What would you like to know?`,
      `Thanks for sharing that about "${String(message)}". How does that make you feel?`,
      `I see you mentioned "${String(message)}". That sounds fascinating!`,
      `I'm listening about "${String(message)}". Please continue.`
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    const botMsg = { id: nextId + 1, sender: "bot", text: randomResponse };

    messages = [...messages, userMsg, botMsg];

    return NextResponse.json(botMsg);
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}


