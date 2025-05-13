'use server'

import { auth } from "@/auth";

export default async function Dashboard() {
  const session = await auth();
  return (
    <div>
      <h1>Dashboard Content</h1>
      用户信息：{JSON.stringify(session || {})}
    </div>
  );
}
