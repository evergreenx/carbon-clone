"use client";

import { Extension, useCodeMirror } from "@uiw/react-codemirror";
import { EditorView } from "@codemirror/view";
import { Ref, useCallback, useEffect, useRef, useState } from "react";
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
import Toolbox from "./toolbox";
import { useEditorUrlState } from "@/hooks/useEditorUrlState";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import WindowsControlHeader from "./settings/window/windows-control-header";
import { toPng, toSvg } from "html-to-image";
import Export from "./export";

import SaveSnippet from "./save-code";
import React from "react";

type SnippetData = {
  id: string;
  title: string;
  code: string;
  language: string;
  theme: string;
  background: string;
  drop_shadow: boolean;
  padding_vertical: string;
  padding_horizontal: string;
  window_controls: boolean;
  operating_system: string;
  font_size: string;
  line_height: string;
  line_numbers: boolean;
};

export default function CodeEditor({ data }: { data?: SnippetData }) {
  const [{ bg, t, l, ds, ph, pv, wc, fs, lh, ln, code }, setValue] =
    useEditorUrlState();

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
      fontSize: `${fs}px`,
      fontFamily: "font",

      boxShadow: ds ? "0 20px 68px rgba(0, 0, 0, 0.55)" : null,
    },
    ".cm-content": {},
    ".cm-gutters": {
      // minHeight: "200px",
    },
    ".cm-scroller": {
      overflow: "auto",

      // fontFamily: font,

      lineHeight: `${lh}%`,
      paddingTop: wc ? "16px" : "0px",
    },
  });

  let extensions: Extension[] | undefined = [];

  // language switch
  switch (l) {
    case "javascript":
      extensions = [javascript(), EditorView.lineWrapping, FontSizeTheme];

      break;
    case "python":
      extensions = [python(), EditorView.lineWrapping, FontSizeTheme];

      break;

    case "java":
      extensions = [java(), EditorView.lineWrapping, FontSizeTheme];

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

  const editor: Ref<any> = useRef();

  const { setContainer, state, view, setView, setState } = useCodeMirror({
    container: editor.current,

    extensions,

    basicSetup: {
      lineNumbers: ln,
      highlightActiveLine: false,
      highlightActiveLineGutter: false,
      foldGutter: false,
    },
    value: code,
    width: "auto",

    height: "auto",
    theme: theme,
    onChange: (value) => {
      setValue({
        code: value,
      });
    },
  });

  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, [t, ds, view, setContainer]);

  const [fileName, setFileName] = useState("");

  const handleDownloadPng = useCallback(() => {
    if (editor.current === null) {
      return;
    }

    toPng(editor.current, { cacheBust: true })
      .then((dataUrl) => {
        console.log("loading");
        const link = document.createElement("a");
        link.download = fileName || "carbonx";

        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [editor, fileName]);

  const handleDownloadSvg = useCallback(() => {
    if (editor.current === null) {
      return;
    }

    toSvg(editor.current, { cacheBust: true })
      .then((dataUrl) => {
        console.log("loading");
        const link = document.createElement("a");
        link.download = fileName || "carbonx";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [editor, fileName]);

  useEffect(() => {
    if (data) {
      // Set the editor state using the snippet data
      const snippet = data;

      setValue({
        title: snippet.title,
        bg: snippet.background,
        t: snippet.theme,
        l: snippet.language,
        ds: snippet.drop_shadow,
        ph: snippet.padding_horizontal,
        pv: snippet.padding_vertical,
        wc: snippet.window_controls,
        fs: snippet.font_size,
        lh: snippet.line_height,
        ln: snippet.line_numbers,
        osType: snippet.operating_system,
        code: snippet.code, 
      });


    }
  }, [data]);

  return (
    <div className="border-[3px] border-white rounded-lg p-4 w-full  lg:max-w-[70%] h-full relative mx-auto">
      <>
        <div className="flex lg:flex-row flex-col  lg:space-x-3 lg:space-y-0 space-y-2">
          <Toolbox />
          <Export
            handleDownloadPng={handleDownloadPng}
            handleDownloadSvg={handleDownloadSvg}
            setFileName={setFileName}
            fileName={fileName}
          />
        </div>

        <div className=" relative">
          <div
            ref={editor}
            className=" w-full h-full z-0"
            style={{
              padding: `${pv}px ${ph}px`,
              backgroundColor: bg,
            }}
          >
            <div className="">
              <WindowsControlHeader />
              <div className=" overflow-hidden  z-50"></div>
            </div>
          </div>

          <SaveSnippet />
        </div>
      </>
    </div>
  );
}
