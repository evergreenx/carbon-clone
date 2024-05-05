import React, { useState } from "react";
import CustomRange from "../custom-range";
import { useEditorUrlState } from "@/hooks/useEditorUrlState";

export default function Padding() {
  const [{ pv, ph }, setState] = useEditorUrlState();

  console.log(pv, ph);

  //   const [value, setValue] = useState(ph);

  //   const [value2, setValue2] = useState(pv);

  const handleChange = (e: React.ChangeEvent<any>) => {
    setState({
      ph: ph,
    });
  };

  const handleChange2 = (e: React.ChangeEvent<any>) => {
    setState({
      pv: pv,
    });
  };

  return (
    <div className="flex w-full">
      <CustomRange
        label="padding (vert) "
        value={ph}
        handleChange={handleChange}
      />

      <CustomRange
        label="padding (horiz) "
        value={pv}
        handleChange={handleChange2}
      />
    </div>
  );
}
