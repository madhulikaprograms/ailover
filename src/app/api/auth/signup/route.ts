import { NextResponse } from "next/server";
import { mockUsers } from "@/lib/mock-users";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body ?? {};

    if (!name || !email || !password) {
      return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
    }

    const user = mockUsers.addUser(name, email, password);
    return NextResponse.json({ success: true, user });
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}


