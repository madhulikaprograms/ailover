import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body ?? {};

    if (!email || !password) {
      return NextResponse.json({ success: false, error: "Missing credentials" }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      user: { id: "1", name: "Demo User", email },
    });
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}


