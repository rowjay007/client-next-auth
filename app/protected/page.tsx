import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export default async function ProtctedPage() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }
  return (
    <div>
      <h1>Protected Page</h1>
      <p>This is a protected page</p>
      <p>You can see if you are authenticated</p>
    </div>
  );
}
