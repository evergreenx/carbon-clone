"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const saveSnippet = async (snippet: any, formdata: FormData) => {
  const title = formdata.get("title"); // Extract the title from FormData
  if (title) {
    snippet.title = title; // Add the title to the snippet object
  }
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

export const signInWithGithub = async () => {
  const supabase = createClient();

  const origin = headers().get("origin");

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    console.log(error);
  } else {
    return redirect(data.url);
  }

  console.log(data, "uu");
};

export const logout = async () => {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
  }
  revalidatePath("/", "page");
};
