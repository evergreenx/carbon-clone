import Image from "next/image";
import React, { useState } from "react";
import SettingIcon from "@/app/assets/setting.svg";
export default function Settings() {
  const [showSettings, setShowSettings] = useState(false);
  return (
    <div className="relative">
      <div
        onClick={() => setShowSettings(!showSettings)}
        className=" w-[40px] h-[40px] border relative rounded-[3px] cursor-pointer  flex justify-center items-center"
      >
        <Image src={SettingIcon} alt="settngicon" />
      </div>

      {showSettings ? <div className="w-[355px] absolute p-3 text-white z-50">



        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ex libero saepe numquam incidunt iusto ipsa ab possimus placeat aut quam molestiae reiciendis sunt, cupiditate sapiente suscipit dignissimos. Commodi, omnis.
      </div> : null}
    </div>
  );
}
