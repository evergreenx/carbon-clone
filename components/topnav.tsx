import React from "react";
import GithubLogo from "../app/assets/github.svg";
import Image from "next/image";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import DropDown from "./drop-down";
export default async function TopNav() {
  const signInWithGithub = async () => {
    "use server";
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

  const logout = async () => {
    "use server";

    const supabase = createClient();

    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    }
    revalidatePath("/", "page");
  };

  const supabase = createClient();

  const { data } = await supabase.auth.getUser();

  return (
    <>
      <DropDown data={data} signIn={signInWithGithub} logout={logout} />
    </>
  );
}
