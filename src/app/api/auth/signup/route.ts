import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body ?? {};

    if (!name || !email || !password) {
      return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      user: { id: "1", name, email },
    });
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}


