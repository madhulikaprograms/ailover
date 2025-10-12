import { NextResponse } from "next/server";
import { mockUsers } from "@/lib/mock-users";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body ?? {};

    if (!email || !password) {
      return NextResponse.json({ success: false, error: "Missing credentials" }, { status: 400 });
    }

    const user = mockUsers.findByEmail(email) ?? mockUsers.addUser("Demo User", email, password);
    return NextResponse.json({ success: true, user });
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}


