import CodeEditor from "@/components/code-editor";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between px-10 py-20">
      <Header />

      <CodeEditor />
    </main>
  );
}
