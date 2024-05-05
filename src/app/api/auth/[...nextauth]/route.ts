import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import prisma from "@/lib/prisma"

// Your own logic for dealing with plaintext password strings; be careful!
// import { saltAndHashPassword } from "@/utils/password"



async function getUserFromDb(email: string) {
  const user = await prisma.user.findUnique({
    where: { email: email },
  })

  return user
}

const handler =  NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null
        
        // logic to salt and hash password
        // const pwHash = saltAndHashPassword(credentials.password)
 
        // logic to verify if user exists
        user = await getUserFromDb(credentials?.email as string)
        console.log("user",{ user })

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.")
        }
        if  (user.password !== credentials?.password) {
          // Passwords don't match
          throw new Error("Password does not match.")
        }
        // return user object with the their profile data
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          // image: user.image,
        }
      },
      
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token
        token.id = profile?.id
      }
      return token
    }
  }
})

export { handler as GET, handler as POST };

// console.log({ handlers, signIn, signOut, auth })