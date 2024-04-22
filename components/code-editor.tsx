"use client";

import CodeMirror, { Extension, useCodeMirror } from "@uiw/react-codemirror";
import { EditorView } from "@codemirror/view";
import { Ref, useEffect, useMemo, useRef } from "react";
import { javascript } from "@codemirror/lang-javascript";
import { abcdef } from "@uiw/codemirror-themes-all";

import { useQueryState } from "nuqs";
import { themes } from "@/data";
import { useSelect } from "downshift";

export default function CodeEditor() {
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

  const color = "purple";
  const [bg, setBg] = useQueryState("bg", { defaultValue: "yellow" });
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

  switch ("abcdef") {
    case "abcdef":
      theme = abcdef;

    //   break;

    // case "darcula":
    //   theme = darcula;

    //   break;
    // case "abyss":
    //   theme = abyss;

    //   break;
    // // Add other cases for different language modes as needed

    default:
      // Default to JavaScript if language mode is not recognized
      // theme = dracula;

      break;
  }

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
  }, [editor.current]);

  return (
    <div className="border-[3px] border-white rounded-lg p-4 w-full h-full relative lg:w-[50%]">
      <Select />
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
    </div>
  );
}

function Select() {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items: themes,
  });

  return (
    <div>
      <div className="w-72 flex flex-col gap-1">
        <label {...getLabelProps()}>Choose your favorite book:</label>
        <div
          className="p-2 bg-white flex justify-between cursor-pointer"
          {...getToggleButtonProps()}
        >
          <span>{selectedItem ? selectedItem.name : "Best book ever"}</span>
          <span className="px-2">{isOpen ? <>&#8593;</> : <>&#8595;</>}</span>
        </div>
      </div>
      <ul
        className={`absolute w-72 bg-white mt-1 shadow-md max-h-80 overflow-scroll p-0 z-10 ${
          !isOpen && "hidden"
        }`}
        {...getMenuProps()}
      >
        {isOpen &&
          themes.map((item, index) => (
            <li
              // className={cx(
              //   highlightedIndex === index && 'bg-blue-300',
              //   selectedItem === item && 'font-bold',
              //   'py-2 px-3 shadow-sm flex flex-col',
              // )}
              key={item.name}
              {...getItemProps({ item, index })}
            >
              <span>{item.name}</span>
              <span className="text-sm text-gray-700">{item.name}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
