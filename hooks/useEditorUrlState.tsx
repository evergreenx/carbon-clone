import {
  useQueryStates,
  parseAsString,
  parseAsBoolean,
} from "nuqs";

// our editor state
export function useEditorUrlState() {
  return useQueryStates({
    title: parseAsString.withDefault(""),
    code: parseAsString.withDefault("console.log(evergreen)"),
    bg: parseAsString.withDefault("#fff"),
    t: parseAsString.withDefault("bespin"),
    l: parseAsString.withDefault("javascript"),
    ds: parseAsBoolean.withDefault(false),
    pv: parseAsString.withDefault("10"),
    ph: parseAsString.withDefault("30"),
    wc: parseAsBoolean.withDefault(false),
    osType: parseAsString.withDefault("m"),
    fs: parseAsString.withDefault("14"),
    lh: parseAsString.withDefault("192"),
    ln: parseAsBoolean.withDefault(true),
  });
}
