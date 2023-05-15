import { NextResponse } from "next/server";
import { prisma } from "../../../prisma/client";

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json({users});

  } catch (error: any) {
    return new Response(JSON.stringify(error.message), {
      status: 500
    });
  }
}