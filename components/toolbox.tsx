import React from "react";
import ThemeSelect from "./theme-select";
import LanguageSelect from "./language-select";

export default function Toolbox() {
  return (
    <div className="mb-4 flex space-x-3 w-full">
      <ThemeSelect />

      <LanguageSelect />
    </div>
  );
}
