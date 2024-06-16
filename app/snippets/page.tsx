import { getUserSnippets } from "@/db/queries";
import Link from "next/link";
import React from "react";

export default async function page() {
  const data = await getUserSnippets();

  return (
    <div className="p-10">
      {data?.data?.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>No snippets found. Start by creating a new snippet.</p>

          <p>
            <Link href={"/"}>Go back Home</Link>
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data?.data?.map((snippet) => (
            <Link
              href={`/snippets/${snippet.id}`}
              key={snippet.id}
              className="bg-white p-4 rounded shadow"
            >
              <h3 className="text-sm font-bold mb-2">{snippet.title}</h3>
              <pre className="bg-gray-100 text-sm p-2 rounded overflow-auto">
                {snippet.code}
              </pre>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
