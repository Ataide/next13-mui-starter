import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ hello: 'world' });
}

export async function POST(
  request: Request
) {
  const body = await request.json();
  const data = await getData(body);

  return NextResponse.json(data);
}

function getData(body: any) {
  throw new Error('Function not implemented.');
}
