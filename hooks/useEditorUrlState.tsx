import { useQueryStates, parseAsString } from "nuqs";


// our editor state
export function useEditorUrlState() {
  return useQueryStates({
    bg: parseAsString.withDefault("red"),
    t: parseAsString.withDefault("bespin"),
  });
}
