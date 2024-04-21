"use client";
import React, { useRef } from "react";

import { UnControlled as CodeMirror } from "react-codemirror2";
require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");

export default function CodeEditor() {
  return (
    <div className="border-[3px] border-white rounded-lg p-4 w-full h-full relative lg:w-[50%]">
      <div className=" relative">
        <div className="bg-red-300 w-full h-full z-0    "
        
        style={{
          padding:"56px 56px"
        }}
        >
          <div className=" ">
            <CodeMirror
              value="<h1>I ♥ react-codemirror2</h1>"
              options={{
                mode: "javascript",
                theme: "material",
                // lineNumbers: true,
              }}
              className="z-50  "
              onChange={(editor, data, value) => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
