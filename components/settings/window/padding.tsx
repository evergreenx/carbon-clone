import React, { useState } from "react";
import CustomRange from "../custom-range";
import { useEditorUrlState } from "@/hooks/useEditorUrlState";

export default function Padding() {
  const [{ pv, ph }, setState] = useEditorUrlState();

  const handleChange = (e: React.ChangeEvent<any>) => {
    setState({
      pv: e.target.value,
    });
  };

  const handleChange2 = (e: React.ChangeEvent<any>) => {
    setState({
      ph: e.target.value,
    });
  };

  return (
    <div className="flex w-full">
      <CustomRange
        label="padding (vert) "
        value={pv}
        handleChange={handleChange}
      />

      <CustomRange
        label="padding (horiz) "
        value={ph}
        handleChange={handleChange2}
      />
    </div>
  );
}
