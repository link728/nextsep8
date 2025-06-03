import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(req: Request) {
  const { name, email, password } = await req.json();
  await dbConnect();

  const existing = await User.findOne({ email });
  if (existing) return NextResponse.json({ error: 'User exists' }, { status: 400 });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword });

  return NextResponse.json({ user });
}
