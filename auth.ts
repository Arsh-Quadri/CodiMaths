import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (
        url === "http://localhost:3000" ||
        "http://localhost:3000/api/auth/signin"
      ) {
        return `/pricing`;
      }
      return baseUrl;
    },
  },
});
