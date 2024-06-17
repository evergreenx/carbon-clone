import { createClient } from "@/utils/supabase/server";
import SaveCodeForm from "./save-code-form";

export default async function SaveSnippet() {
  const supabase = createClient();

  const session = await supabase.auth.getSession();

  return (
    <>
      <SaveCodeForm session={session.data.session} />
    </>
  );
}
