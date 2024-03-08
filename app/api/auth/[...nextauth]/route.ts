import { db } from '@/lib/db';
import { session } from '@/lib/session';
import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ account, profile }) {
      if (!profile?.email) {
        throw new Error('No profile');
      }

      console.log(profile.email);

      await db.user.upsert({
        where: {
          email: profile.email,
        },
        create: {
          email: profile?.email,
          name: profile?.name || 'sem nome',
          avatar: profile?.image || 'sem avatar',
        },
        update: {
          name: profile.name,
        },
      });

      return true;
    },

    session,
    async jwt({ token, user, account, profile }) {
      if (profile) {
        const user = await db.user.findUnique({
          where: {
            email: profile.email,
          },
        });
        if (!user) {
          throw new Error('No user found');
        }
        token.id = user.id;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
