import type { AuthOptions, User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
// import facebookProvider from 'next-auth/providers/facebook';
// import vkProvider from 'next-auth/providers/vk';
// import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

type LoginUser = {
  password: string;
  email: string;
  id: string;
  name: string;
  role: string;
  image: string;
}

const users: LoginUser[] = [
  {id: '1', password: '1234qwer', email: 'gubin_ruslan@rambler.ru', name: 'Ruslan', role: 'admin', image: 'https://res.cloudinary.com/ds289tkqj/image/upload/v1691852263/Player/xgqcxb1hb4hilfmyrbpc.webp'},
  {id: '2', password: '1234', email: 'gubin_ruslan2@rambler.ru', name: 'Anna', role: 'guest', image: 'https://res.cloudinary.com/ds289tkqj/image/upload/v1691693213/Player/mhqabwjxefporh1cj607.jpg'}
]

export const authConfig: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: "Sing in",
      credentials: {
        email: { label: 'email', type: 'email', required: true },
        password: { label: 'password', type: 'password', required: true }, 
      },
     async authorize(credentials) {
      if (!credentials?.email || !credentials.password) return null;

      /** тут может запрос на сервер login */

      const currentUser = users.find(user => user.email === credentials.email)

      if (currentUser && currentUser.password === credentials.password) {
        const { password, ...userWithoutPass } = currentUser;

        return userWithoutPass as User;
      }

      return null   
      },
    }),
    // facebookProvider({
    //   clientId: '',
    //   clientSecret: '',
    // }),
    // vkProvider({
    //   clientId: '',
    //   clientSecret: '',
    // }),
    // GithubProvider({
    //   clientId: 'process.env.GITHUB_ID',
    //   clientSecret: 'process.env.GITHUB_SECRET',
    // }),
  ],
  pages: {
    signIn: '/signin',

  },
}