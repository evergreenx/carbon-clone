import React from "react";
import CustomRange from "../custom-range";
import { useEditorUrlState } from "@/hooks/useEditorUrlState";

export default function LineHeight() {
  const [{ lh }, setState] = useEditorUrlState();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      lh: e.target.value,
    });
  };
  return (
    <>
      <CustomRange
        handleChange={handleChange}
        value={lh}
        label="Line height"
        min="90"
        max="250"
      />
    </>
  );
}
