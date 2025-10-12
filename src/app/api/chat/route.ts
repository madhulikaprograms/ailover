import { NextResponse } from "next/server";

let messages = [
  { id: 1, sender: "bot", text: "Hello! How can I help you today?" },
  { id: 2, sender: "user", text: "Just testing this demo." },
  { id: 3, sender: "bot", text: "Great! Feel free to ask anything." },
];

export async function GET() {
  // Example history if needed
  return NextResponse.json([
    { id: 1, sender: "bot", text: "Hello love ❤️ How are you feeling today?" },
  ]);
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
    const botMsg = { id: nextId + 1, sender: "bot", text: `You said: ${String(message)}` };

    messages = [...messages, userMsg, botMsg];

    return NextResponse.json(botMsg);
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}


