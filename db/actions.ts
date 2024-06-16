"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export const saveSnippet = async (snippet: any, formdata: FormData) => {
  console.log(formdata);
  const supabase = createClient();
  const { data, error } = await supabase
    .from("code_snippets")
    .insert([snippet]);

  if (error) {
    console.error("Error saving snippet:", error);
    return null;
  }

  return data;
};
