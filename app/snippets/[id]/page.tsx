import CodeEditor from "@/components/code-editor";
import Header from "@/components/header";
import { getUserSnippetById } from "@/db/queries";
import React, { Suspense } from "react";

export default async function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const data = await getUserSnippetById(params.id);

;

  return (
    <Suspense>
      <main className="flex  flex-col items-center  px-10 py-20 ">
        <Header />

        <CodeEditor data={data} />
      </main>
    </Suspense>
  );
}
