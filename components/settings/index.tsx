import Image from "next/image";
import React, { useState } from "react";
import SettingIcon from "@/app/assets/setting.svg";
import Padding from "./window/padding";
import classNames from "classnames";

import { useClickOutside } from "@/hooks/use-click-outside";
import WindowContainer from "./window";
export default function Settings() {
  const [showSettings, setShowSettings] = useState(false);

  const sideControl = ["window", "editor"];

  const [showWindowsControls, setShowWindowsControls] = useState(true);
  const [showEditorControls, setShowEditorControls] = useState(false);

  const [activeControl, setActiveControl] = useState('window');

  const toggleControl = (control: string) => {
    setActiveControl(control);
    if (control === "window") {
      setShowWindowsControls(true);
      setShowEditorControls(false);
    } else if (control === "editor") {
      setShowEditorControls(true);
      setShowWindowsControls(false);
    }
  };

  const onClickOutside = () => {
    setShowSettings(false);
  };

  const clickRef = useClickOutside(onClickOutside);

  const cx = classNames;

  return (
    <div ref={clickRef} className="relative">
      <div
        onClick={() => setShowSettings(!showSettings)}
        className=" w-[40px] h-[40px] border relative rounded-[3px] cursor-pointer  flex justify-center items-center"
      >
        <Image src={SettingIcon} alt="settngicon" />
      </div>

      {showSettings ? (
        <div
          className="w-[355px] 

          rounded-[3px] absolute flex border top-12
         text-white z-50 bg-primary"
        >
          <div className="sidecontrol border w-[40%] bg-[#393939] ">
            {sideControl.map((i, index) => {
              return (
                <div
                  key={index}
                  onClick={() => toggleControl(i)}
                  className={cx(
                    activeControl === i && "bg-primary",
                    `border-b h-[33px] p-[6px] cursor-pointer w-full  hover:bg-primary `
                  )}
                >
                  <p className="text-xs capitalize">{i}</p>
                </div>
              );
            })}
          </div>

          <div className="w-full">
            {showWindowsControls ? <WindowContainer /> : null}

            {showEditorControls ? <div className="">editor</div> : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
