"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex space-x-2">
      <Button onClick={() => signIn("github", { redirectTo: "/dashboard" })}>github 登录</Button>
      <Button onClick={() => signIn("google", { redirectTo: "/dashboard" })}>Google 登录</Button>
      <Button onClick={() => signIn("gitee", { redirectTo: "/dashboard" })}>Gitee 登录</Button>
    </main>
  );
}
