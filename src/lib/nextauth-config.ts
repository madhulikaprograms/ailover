import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { mockUsers } from "@/lib/mock-users";

const authConfig: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const user = mockUsers.findByEmail(credentials.email);
        if (!user || user.password !== credentials.password) return null;
        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
};

export default authConfig;


