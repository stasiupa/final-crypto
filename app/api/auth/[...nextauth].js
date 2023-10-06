import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Sign In",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Email@email.com",
        },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password)
          return null;

        //FETCH USER from DB
        //   const user = await fetch(USER);
        // const dbUser = user.email

        // if (dbUser && dbUser.password === credentials.password) {
        //   const {password, createdAt, id,...dbUserWithoutPassword } = dbUser;
        //   return dbUserWithoutPassword as User
        // }
        return null;
      },
    }),
  ],
};

export default NextAuth(authOptions);
