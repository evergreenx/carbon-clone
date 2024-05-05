import React from "react";
import CustomRange from "../custom-range";
import { useEditorUrlState } from "@/hooks/useEditorUrlState";

export default function FontSize() {
  const [{ fs }, setState] = useEditorUrlState();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      fs: e.target.value,
    });
  };
  return (
    <>
      <CustomRange
        handleChange={handleChange}
        value={fs}
        label="Font size"
        min="10"
        max="20"
      />
    </>
  );
}
