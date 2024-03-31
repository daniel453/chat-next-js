import bcrypt from 'bcrypt'
import NextAuth, { AuthAction, AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from '@next-auth/prisma-adapter'

import prisma from '@/app/lib/prisma'
import nextAuth from 'next-auth'

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // GithubProvider({
    //   clientId: sessionStorage,
    //   clientSecret: sss
    // }),
    // GoogleProvider({
    //   clientId: AssertionError,
    //   clientSecret: ASD
    // }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'text' }
      },
      async authorize(credentials, req) {
        if(!credentials?.email || !credentials.password) {
          throw Error('Credenciales invalidas')
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          }
        })

        if(!user) {
          throw Error('El correo no esta registrado')
        }
        
        const correctPassword = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if(!correctPassword) {
          throw Error('La contraseña no es correcta')
        }

        return user
      },
    })
  ],
  debug: process.env.NODE_ENV == 'development',
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_URL
}

const handler = nextAuth(authOptions)

export { handler as GET, handler as POST }