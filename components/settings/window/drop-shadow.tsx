import React, { useState } from "react";
import ActiveIcon from "@/app/assets/active.svg";
import Image from "next/image";
import { useEditorUrlState } from "@/hooks/useEditorUrlState";

export default function DropShadow() {

  const [{ ds }, setState] = useEditorUrlState();

  const [isChecked, setIsChecked] = useState(ds);


  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    setState({
      ds: !isChecked,
    });
  };

  return (
    <div className="flex justify-between items-center p-2 ">
      <label className="text-xs">Drop shadow</label>

      <div className=" cursor-pointer">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={toggleCheckbox}
          className="absolute p-2  size-[18px] opacity-0 "
        />

        {isChecked ? (
          <Image src={ActiveIcon} alt="activeicon" />
        ) : (
          <div
            className="w-[18px] h-[18px] rounded-[36px] bg-[#393939]


"
          ></div>
        )}
      </div>
    </div>
  );
}
