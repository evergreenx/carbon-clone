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
import MainEditor from "./main-editor";

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
  return (
    <div className="border-[3px] border-white rounded-lg p-4 w-full  lg:max-w-[50%] h-full relative mx-auto">
      <>
        <MainEditor data={data} />
        <SaveSnippet />
      </>
    </div>
  );
}
