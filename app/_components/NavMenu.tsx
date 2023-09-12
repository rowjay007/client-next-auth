"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const activeRoute =
  "block px-4 py-2 text-blue-500 bg-blue-100 hover:bg-blue-200";
const inactiveRoute = "block px-4 py-2 text-gray-500 hover:text-gray-700";
function AuthButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session?.user?.name} <br />
        <Link href="#" onClick={() => signOut()}>
          Sign out
        </Link>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Link href="#" onClick={() => signIn()}>
        Sign in
      </Link>
    </>
  );
}

export default function NavMenu() {
  const pathname = usePathname();
  return (
    <div>
      <AuthButton />
      <hr className="my-4" />
      <ul>
        <li>
          <a
            href="/"
            className={pathname === "/" ? activeRoute : inactiveRoute}
          >
            Active Route
          </a>
        </li>
        <li>
          <a
            href="/protected"
            className={pathname === "/protected" ? activeRoute : inactiveRoute}
          >
            Inactive Route
          </a>
        </li>
        {/* Add more <li> elements for other routes as needed */}
      </ul>
    </div>
  );
}
