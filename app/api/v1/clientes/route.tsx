import { NextResponse } from 'next/server';

export async function GET() {
 const data = await fetch('https://jsonplaceholder.typicode.com/todos/3')
 const response = await data.json();
 return NextResponse.json({ data: response })
}