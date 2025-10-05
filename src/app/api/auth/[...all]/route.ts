// Temporarily disabled for demo - using simple mock auth instead
// import { auth } from "@/lib/auth"; 
// import { toNextJsHandler } from "better-auth/next-js";

// export const { POST, GET } = toNextJsHandler(auth);

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Auth endpoint disabled for demo" });
}

export async function POST() {
  return NextResponse.json({ message: "Auth endpoint disabled for demo" });
}