import Image from "next/image";
import {Inter} from "next/font/google";
import {useSession, signIn, signOut} from "next-auth/react";
import Nav from "@/components/Nav";
import Layout from "@/components/Layout";

export default function Home() {
  const {data: session} = useSession(); // renaming data to session
  if (!session) return;
  return (
    <Layout>
      <div className="text-blue-900">Hello, {session?.user?.email}</div>
    </Layout>
  );
}
