import { NextResponse } from "next/server";
import { prisma } from "../../../prisma/client";

export async function GET(request: Request) {
  try {
    const offices = await prisma.office.findMany();
    return NextResponse.json(offices)

  } catch (error: any) {
    return new Response(JSON.stringify(error.message), {
      status: 500
    });
  }
}

export async function POST(request: Request) {
  try {
    const { name } = await request.json();
    
    const office = await prisma.office.create({
      data: {
        name
      }
    });

    return new Response(JSON.stringify(office), {
      status: 201
    });

  } catch (error: any) {
    return new Response(JSON.stringify(error.message), {
      status: 500
    });
  }
}

export async function DELETE(request: Request) {
  try {
    throw new Error('Function not implemented')
    
  } catch (error: any) {
    return new Response(JSON.stringify(error.message), {
      status: 500
    });
  }


}