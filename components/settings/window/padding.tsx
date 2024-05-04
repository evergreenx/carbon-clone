import React from "react";
import CustomRange from "../custom-range";

export default function Padding() {
  return (
    <div className="flex w-full">
      <CustomRange label="padding (vert) " min={0} max={100} />

      <CustomRange label="padding (horiz) " min={0} max={100} />
    </div>
  );
}
