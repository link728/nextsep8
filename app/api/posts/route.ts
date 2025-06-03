import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Post from '@/models/Post';

export async function GET() {
  await dbConnect();
  const posts = await Post.find().populate('userId').sort({ createdAt: -1 });
  return NextResponse.json({ posts });
}

export async function POST(req: Request) {
  const { userId, content, image } = await req.json();
  await dbConnect();
  const newPost = await Post.create({ userId, content, image });
  return NextResponse.json({ post: newPost });
}
