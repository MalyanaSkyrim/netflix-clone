import Image from "next/image";
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src="/signin_background.jpg"
        alt="image"
        className="hidden sm:block sm:object-cover -z-10 brightness-50"
        fill
        priority
      />
      <Image
        src="/netflix_logo.svg"
        alt="image"
        priority
        className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
        width={120}
        height={120}
      />
      {children}
    </div>
  );
};

export default AuthLayout;
