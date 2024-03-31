import bcrypt from 'bcrypt'
import prisma from '@/app/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request:Request) {
  const body = await request.json()
  const {
    name,
    email,
    password
  } = body

  if(!email || !password || !name) {
    return new NextResponse('Missing info',{ status: 400 })
  }

  const hashed = await bcrypt.hash(password,12)
  const user = await prisma.user.create({
    data: {
      email: email,
      name: name,
      password: hashed,
    }
  })

  return NextResponse.json(user,{status: 201})
}