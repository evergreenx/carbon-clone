"use client";
import { saveSnippet } from "@/db/actions";
import { useEditorUrlState } from "@/hooks/useEditorUrlState";
import { createClient } from "@/utils/supabase/client";
import { Session } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";

import { useFormStatus } from "react-dom";

const SaveButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="py-3 px-5 border-2 border-green-400 text-green-400 text-sm rounded"
      type="submit"
    >
      {pending ? "Saving" : "Save"}
    </button>
  );
};

export default function SaveSnippet() {
  const [session, setSession] = useState<Session | null>();

  const [{ bg, t, l, ds, ph, pv, wc, fs, lh, ln, osType, code }] =
    useEditorUrlState();
  const supabase = createClient();
  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };

    getSession();
  }, []);

  const snippet = {
    user_id: session?.user.id,
    title: "My evee",
    code: code,
    language: l,
    theme: t,
    background: bg,
    drop_shadow: ds, // Use snake_case to match SQL column names
    padding_vertical: pv, // Use snake_case to match SQL column names
    padding_horizontal: ph, // Use snake_case to match SQL column names
    window_controls: wc, // Use snake_case to match SQL column names
    operating_system: osType, // Use snake_case to match SQL column names
    font_size: fs, // Use snake_case to match SQL column names
    line_height: lh, // Use snake_case to match SQL column names
    line_numbers: ln, // Use snake_case to match SQL column names
  };

  const create = saveSnippet.bind(null, snippet);

  return (
    <form action={create} className="p-2 flex justify-between w-full">
      <input
        type="text"
        placeholder="add a name....."
        name="title"
        required
        className="border-none bg-transparent text-white w-full outline-none "
      />

      <SaveButton />
    </form>
  );
}
