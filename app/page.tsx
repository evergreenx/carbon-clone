import CodeEditor from "@/components/code-editor";
import Header from "@/components/header";
import { Suspense } from "react";

import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import TopNav from "@/components/topnav";

export default async function Home() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    // redirect("/");
  }

  console.log(data)
  return (
    <Suspense>
      <TopNav />

      <main className="flex  flex-col items-center  px-10 py-20 ">
        {data?.user?.email}
        <Header />

        <CodeEditor />
      </main>
    </Suspense>
  );
}
