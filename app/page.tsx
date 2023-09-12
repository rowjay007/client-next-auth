import { getServerSession } from "next-auth/next";
import NavMenu from "./_components/NavMenu";
import { Button } from "@/components/ui/button";
export default async function Home() {

  const session = await getServerSession();


  return (
    <>
      getServerSession Result
      {session?.user?.name ? (
        <div> {session?.user?.name} </div>
      ) : (
        <div> Not signed in </div>
      )}
     
    </>
  );
}
