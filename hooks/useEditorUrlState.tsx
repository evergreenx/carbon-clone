import { useQueryStates, parseAsString, parseAsBoolean , parseAsInteger } from "nuqs";


// our editor state
export function useEditorUrlState() {
  return useQueryStates({
    bg: parseAsString.withDefault("#ff0000"),
    t: parseAsString.withDefault("bespin"),
    l : parseAsString.withDefault('javascript'),
    ds : parseAsBoolean.withDefault(false),
    pv : parseAsInteger.withDefault(10),
    ph : parseAsInteger.withDefault(30),

  });
}
