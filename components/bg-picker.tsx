import { useEditorUrlState } from "@/hooks/useEditorUrlState";
import React, { useState } from "react";
import { Sketch } from "@uiw/react-color";

import { useClickOutside } from "@/hooks/use-click-outside";

export default function BGPicker() {
  const [{ bg }, setState] = useEditorUrlState();

  const onClickOutside = () => {
    setShowPicker(false);
  };

  const clickRef = useClickOutside(onClickOutside);

  const [hex, setHex] = useState(bg);
  const [showPicker, setShowPicker] = useState(false);
  return (
    <>
      <div
        style={{
          backgroundColor: bg,
        }}
        onClick={() => setShowPicker(true)}
        className=" w-[40px] h-[40px] border rounded-[3px] cursor-pointer relative"
      ></div>

      {showPicker && (
        <div className="absolute inset-0  z-50" ref={clickRef}>
          <Sketch
            style={{ marginLeft: 20 }}
            color={hex}
            onChange={(color) => {
              setHex(color.hex);
              setState({
                bg: color.hex,
              });
            }}
          />
        </div>
      )}
    </>
  );
}
