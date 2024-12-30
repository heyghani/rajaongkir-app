import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET || "your_secret_key";

export async function POST(request: Request) {
  const { username, password } = await request.json();
  if (username === "admin" && password === "password") {
    const token = jwt.sign({ id: 1, username }, SECRET_KEY, {
      expiresIn: "1h",
    });
    return NextResponse.json({ token });
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
