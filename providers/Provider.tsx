"use client"

import { SessionProvider } from "next-auth/react"

type provider = {
  children: any,
  session: any,
}

const Provider = ({ children, session }: provider) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider