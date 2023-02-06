"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function GoogleButton() {
  const searchParams = useSearchParams();
  const whence = searchParams.get("redirect") || "/";

  return (
    <>
      <button
        onClick={() => signIn("google", { callbackUrl: whence })}
        className="google-button"
        type="button"
      >
        <Image
          src={"/images/google.svg"}
          alt="styling logo"
          width={20}
          height={20}
        />{" "}
        Sign in with Google
      </button>
    </>
  );
}
