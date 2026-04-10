// app/api/projects/route.ts
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("my_website"); // Ensure this matches your DB name

    const projects = await db
      .collection("projects")
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();

    return NextResponse.json(projects);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}