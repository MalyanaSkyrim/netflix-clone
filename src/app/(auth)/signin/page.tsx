import Link from "next/link";
import GithubSignInButton from "@/components/GithubSignInButton";
import GoogleSignInButton from "@/components/GoogleSignInButton";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth/nextAuthOptions";
import AuthForm from "@/components/AuthForm";

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/home");
  }
  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14 min-w-[370px]">
      <AuthForm type="signin" />
      <div className="text-gray-500 text-sm mt-2">
        New to Netflix?{" "}
        <Link className="text-white hover:underline" href="/signup">
          Sign up now
        </Link>
      </div>

      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <GithubSignInButton />
        <GoogleSignInButton />
      </div>
    </div>
  );
}
