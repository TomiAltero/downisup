import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",  // Proveer valor por defecto
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",  // Proveer valor por defecto
    }),
  ],
};

export default NextAuth(authOptions);