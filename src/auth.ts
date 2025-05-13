import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Gitee from "./providers/gitee";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Github,
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Gitee({
      clientId: process.env.GITEE_CLIENT_ID,
      clientSecret: process.env.GITEE_CLIENT_SECRET,
    }),
  ],
  session: {
    // 如果要使用 Credentials 登录，必须要 jwt 模式
    strategy: "jwt",
  },
  callbacks: {
    // 在 jwt 回调中返回用户 id 给 token
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    // 在 session 回调中，取出token里面的用户 id 给 session
    session({ session, token }) {
      session.user!.id = token.id! as string;
      return session;
    },
  },
});
