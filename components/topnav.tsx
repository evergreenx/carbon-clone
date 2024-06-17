import React from "react";

import { createClient } from "@/utils/supabase/server";

import DropDown from "./drop-down";
import { logout, signInWithGithub } from "@/db/actions";
export default async function TopNav() {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <>
      <DropDown data={data} signIn={signInWithGithub} logout={logout} />
    </>
  );
}
