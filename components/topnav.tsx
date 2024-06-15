import React from "react";
import GithubLogo from "../app/assets/github.svg";
import Image from "next/image";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
export default function TopNav() {
  const signInWithGithub = async () => {
    "use server";

    const supabase = createClient();
    const origin = headers().get("origin");

    console.log(origin);

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

    console.log(data , 'uu');
  };
  return (
    <form action={signInWithGithub} className="flex justify-end p-4 ">
      <button className="border-2 space-x-4 p-2 border-white rounded text-white flex items-center bg-primary h-[40px]">
        <Image src={GithubLogo} width={20} alt="githublogo" />

        <p className="text-sm">Sign in/up</p>
      </button>
    </form>
  );
}
