import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { getToken } from "next-auth/jwt"

import jwt from 'jsonwebtoken'
// import { auth } from "../auth/[...nextauth]"

// import { getSession } from 'next-auth/react'
export async function GET(request: Request) {
  const secret = process.env.NEXTAUTH_SECRET
  const req = request as any
  const token = await getToken({ req , secret})

  console.log('token', token)
  // console.log('request', auth)
    // const session = await getSession({ req: request })
    // console.log('session', session)
    // console.log('cookie', cookie)
    // const cookie = request.headers.get('cookie')
    // const token = cookies().get('next-auth.csrf-token')

    if (!token) {
        return NextResponse.redirect('http://localhost:3000/login')
    }
    else {
        try {
          // console.log('token', token)
          jwt.verify(token, secret)
        }
        catch (err) {
          console.log('err', err)
          return NextResponse.redirect('http://localhost:3000/login')
        }
        // console.log('decoded', decoded)
    }
    return NextResponse.json({ user: 'Anas' }, { status: 200 })
}