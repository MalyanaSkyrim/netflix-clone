import { authOptions } from "@/lib/auth/nextAuthOptions";
import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/signin");
  } else {
    return redirect("/home");
  }
}
