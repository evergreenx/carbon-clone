import { createClient } from "@/utils/supabase/server";

export async function getUserSnippets() {
  const supabase = createClient();

  const { data } = await supabase.from("code_snippets").select();

  return {
    data,
  };
}

export async function getUserSnippetById(snippetId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("code_snippets")
    .select("*")
    .eq("id", snippetId)
    .single(); // Ensures that only a single object is returned

  if (error) {
    console.error("Error fetching snippet:", error);
    return null;
  }

  return data;
}
