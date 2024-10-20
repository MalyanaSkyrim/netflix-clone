import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import React from "react";

const MagicLinkSentPage = async () => {
  const session = await getServerSession();

  if (session) redirect("/home");

  return (
    <div className="space-y-3 rounded-md text-center bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14 min-w-[370px] justify-center items-center">
      <div>
        <h2 className="text-2xl">Check your email</h2>
        <p className="text-white/70">
          A sign in link has been sent to your email address
        </p>
      </div>
    </div>
  );
};

export default MagicLinkSentPage;
