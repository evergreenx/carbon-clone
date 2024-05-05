import React, { useState } from "react";
import ActiveIcon from "@/app/assets/active.svg";
import Image from "next/image";
import { useEditorUrlState } from "@/hooks/useEditorUrlState";
import ControlOne from "@/app/assets/control1.svg";

import ControlTwo from "@/app/assets/control2.svg";

import ControlThree from "@/app/assets/control3.svg";


export default function WindowsControl() {
  const [{ wc }, setState] = useEditorUrlState();

  const [isChecked, setIsChecked] = useState(wc);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    setState({
      wc: !isChecked,
    });
  };

  return (
    <div className="p-2">
      <div className="flex justify-between items-center">
        <label className="text-xs">Windows Control</label>

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

      {isChecked ? (
        <div className="my-2 space-x-6 flex">
          <div className="">
            <Image src={ControlOne} alt="controlone" />
          </div>

                  
          <div className="">
            <Image src={ControlThree} alt="controlothree" />
          </div>

          <div className="">
            <Image src={ControlTwo} alt="controlotwo" />
          </div>


  
        </div>
      ) : null}
    </div>
  );
}
