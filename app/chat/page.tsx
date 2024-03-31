'use client'
import { signOut } from "next-auth/react"

export default function chat() {
  return (
    <h1 onClick={() => signOut({ redirect: true })}>chat</h1>
  )
}