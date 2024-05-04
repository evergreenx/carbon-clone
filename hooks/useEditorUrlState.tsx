import { useQueryStates, parseAsString, parseAsBoolean } from "nuqs";


// our editor state
export function useEditorUrlState() {
  return useQueryStates({
    bg: parseAsString.withDefault("#ff0000"),
    t: parseAsString.withDefault("bespin"),
    l : parseAsString.withDefault('javascript'),
    ds : parseAsBoolean.withDefault(false)
  });
}
