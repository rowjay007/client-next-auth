"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function AuthButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session?.user?.name} <br />
        <Link href="#" onClick={() => signOut()}>Sign out</Link>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Link href="#"  onClick={() => signIn()}>Sign in</Link>
    </>
  );
}

export default function NavMenu() {
  return (
    <div>
      <AuthButton />
    </div>
  );
}
