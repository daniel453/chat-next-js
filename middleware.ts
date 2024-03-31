import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/register",
  }
})

export const config = {
  matcher: [
    "/chat/:function*",
    "/api/v1/:function*",
  ]
}