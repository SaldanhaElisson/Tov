import { db } from '@/lib/db';
import { session } from '@/actions/session';
import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;

export const authOptions: NextAuthOptions = {
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
