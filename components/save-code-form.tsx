"use client";
import React from "react";
import { useEditorUrlState } from "@/hooks/useEditorUrlState";
import { saveSnippet } from "@/db/actions";
import SaveButton from "./save-button";
import { Session } from "@supabase/supabase-js";

export default function SaveCodeForm({ session }: { session: Session | null }) {
  const [
    { bg, t, l, ds, ph, pv, wc, fs, lh, ln, code, osType, title },
    setValue,
  ] = useEditorUrlState();

  const snippet = {
    user_id: session?.user.id,
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

  const save = saveSnippet.bind(null, snippet);
  return (
    <>
      {session ? (
        <form action={save} className="p-2 flex justify-between w-full">
          <input
            type="text"
            placeholder="add a name....."
            name="title"
            defaultValue={title}
            required
            className="border-none bg-transparent text-white w-full outline-none "
          />

          <SaveButton />
        </form>
      ) : null}
    </>
  );
}
