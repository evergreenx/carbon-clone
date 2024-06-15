import CodeEditor from "@/components/code-editor";
import Header from "@/components/header";
import { Suspense } from "react";


import TopNav from "@/components/topnav";

export default async function Home() {


  return (
    <Suspense>
      <TopNav />

      <main className="flex  flex-col items-center  px-10 py-20 ">
        <Header />

        <CodeEditor />
      </main>
    </Suspense>
  );
}
