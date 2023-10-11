import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { Client } from 'pg';
import { compare } from 'bcrypt';

const handler = NextAuth({
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/login'
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;

        // Create a PostgreSQL client instance
        const client = new Client({
          user: 'postgres',
          host: 'localhost',
          database: 'postgres',
          password: 'testpass123',
          port: 5432,
        });

        try {
          // Connect to the database
          await client.connect();

          // Query the user table for the provided email
          const query = 'SELECT * FROM core_user WHERE email = $1';
          const response = await client.query(query, [email]);
          // console.log(response)

          if (response.rows.length === 1) {
            const user = response.rows[0];
            const passwordCorrect = await compare(credentials?.password || "", user.password);
            // console.log({ passwordCorrect })
            if (passwordCorrect) {
              const authenticatedUser = {
                id: user.id,
                email: user.email,
                // Add other user data as needed
              };
              console.log('Logged in user:', authenticatedUser); // Log the user
              return authenticatedUser
            }
          }
        } catch (error) {
          console.error('Error authenticating user:', error);
        } finally {
          // Close the database connection
          await client.end();
        }

        // If no match or an error occurs, return null
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
