"use client";
import React, { useRef } from "react";

import { UnControlled as CodeMirror } from "react-codemirror2";

// import { EditorView } from "codemirror/view";
require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");

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
  return (
    <div className="border-[3px] border-white rounded-lg p-4 w-full h-full relative lg:w-[50%]">
      <div className=" relative">
        <div
          className="bg-[#4F46E5] w-full h-full z-0    "
          style={{
            padding: "56px 56px",
          }}
        >
          <div className=" overflow-hidden ">
            <CodeMirror
              value={value}
              options={{
                mode: "javascript",
                theme: "material",
                viewportMargin: Infinity,

                lineWrapping : true
              
                

                // lineNumbers: true,
              }}
              className="z-50  text-sm pl-3 overflow-hidden "
              onChange={(editor, data, value) => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
