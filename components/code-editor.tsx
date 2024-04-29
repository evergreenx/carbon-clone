"use client";

import { Extension, useCodeMirror } from "@uiw/react-codemirror";
import { EditorView } from "@codemirror/view";
import { Ref, useEffect, useRef } from "react";
import { javascript } from "@codemirror/lang-javascript";
import {
  abcdef,
  basicDark,
  bespin,
  abyss,
  dracula,
  consoleLight,
  darcula,
} from "@uiw/codemirror-themes-all";

import { useQueryState, useQueryStates, parseAsString } from "nuqs";
import Toolbox from "./toolbox";
import { useEditorUrlState } from "@/hooks/useEditorUrlState";

export default function CodeEditor() {
  const [{ bg, t }] = useEditorUrlState();

  const value = `const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

  const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)
  
  const unfold = (f, seed) => {
    const go = (f, seed, acc) => {
      const res = f(seed)
      return res ? go(f, res[1], acc.concat([res[0]])) : acc
    }
    return go(f, seed, [])
  }`;

  const FontSizeTheme = EditorView.theme({
    "&": {
      fontSize: `14px`,
      fontFamily: "font",

      // boxShadow: ds ? "0 20px 68px rgba(0, 0, 0, 0.55)" : "",
    },
    ".cm-content": {},
    ".cm-gutters": {
      // minHeight: "200px",
    },
    ".cm-scroller": {
      overflow: "auto",

      // fontFamily: font,

      // lineHeight: 22/,
      // paddingTop: osActive ? "16px" : "",
    },
  });

  console.log(bg);

  console.log(t);

  let extensions: Extension[] | undefined = [];

  // language switch
  switch ("javascript") {
    case "javascript":
      extensions = [javascript(), EditorView.lineWrapping, FontSizeTheme];

      break;
      // case "python":
      //   extensions = [python(), EditorView.lineWrapping, FontSizeTheme];

      break;
    // Add other cases for different language modes as needed

    default:
      // Default to JavaScript if language mode is not recognized
      extensions = [javascript({ jsx: true })];

      break;
  }

  let theme: Extension | undefined = undefined;

  switch (t) {
    case "abcdef":
      theme = abcdef;

      break;

    case "bespin":
      theme = bespin;

      break;

    case "consoleLight":
      theme = consoleLight;

      break;

    case "basic dark":
      theme = basicDark;

      break;
    case "abyss":
      theme = abyss;

      break;
    case "dracula":
      theme = dracula;

      break;

    case "darcula":
      theme = darcula;

      break;
    // // Add other cases for different language modes as needed

    default:
      // Default to JavaScript if language mode is not recognized
      theme = dracula;

      break;
  }

  console.log(theme);
  const editor: Ref<any> = useRef();
  const { setContainer, state, setView, setState } = useCodeMirror({
    container: editor.current,

    extensions,

    basicSetup: {
      lineNumbers: false,
      highlightActiveLine: false,
      highlightActiveLineGutter: false,
      foldGutter: false,
    },
    value: value,
    width: "auto",

    height: "auto",
    theme: theme,
  });

  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, [editor.current, t]);

  return (
    <div className="border-[3px] border-white rounded-lg p-4 w-full h-full relative lg:w-[50%]">
      <>
        <Toolbox />
        <div className=" relative">
          <div
            className=" w-full h-full z-0    "
            style={{
              padding: "56px 56px",
              backgroundColor: bg,
            }}
          >
            <div className=" overflow-hidden " ref={editor}></div>
          </div>
        </div>
      </>
    </div>
  );
}
