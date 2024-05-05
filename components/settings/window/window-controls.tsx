import React, { useState } from "react";
import ActiveIcon from "@/app/assets/active.svg";
import Image from "next/image";
import { useEditorUrlState } from "@/hooks/useEditorUrlState";
import ControlOne from "@/app/assets/control1.svg";

import ControlTwo from "@/app/assets/control2.svg";

import ControlThree from "@/app/assets/control3.svg";

export default function WindowsControl() {
  const [{ wc, osType }, setState] = useEditorUrlState();

  const [isChecked, setIsChecked] = useState(wc);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    setState({
      wc: !isChecked,
    });
  };

  const [activeWindowsControl, setActiveWindowsControl] = useState(osType);

  const osTypes = [
    { type: "w", image: ControlOne },
    { type: "m", image: ControlTwo },
    { type: "w2", image: ControlThree },
  ];

  const handleSetActiveOs = (os: string) => {
    setActiveWindowsControl(os);
    setState({
      osType: os,
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
            <div className="w-[18px] h-[18px] rounded-[36px] bg-[#393939]"></div>
          )}
        </div>
      </div>

      {isChecked ? (
        <div className="my-2 space-x-6 flex">
          {osTypes.map((os, index) => (
            <div
              className={`${
                activeWindowsControl === os.type
                  ? "border-2 rounded-[3px]"
                  : null
              }`}
              key={index}
              onClick={() => handleSetActiveOs(os.type)}
            >
              <Image src={os.image} alt={`control${index + 1}`} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
