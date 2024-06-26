import React from "react";
import ThemeSelect from "./theme-select";
import LanguageSelect from "./language-select";
import BGPicker from "./bg-picker";
import Settings from "./settings";
import Export from "./export";

export default function Toolbox() {
  return (
    <div className="mb-4 flex flex-col lg:flex-row  lg:space-x-3 lg:space-y-0 space-y-2 ">
      <ThemeSelect />

      <LanguageSelect />

      <BGPicker />

      <Settings />
    </div>
  );
}
