import React, { useState } from "react";
import ExportArrow from "@/app/assets/exportarrow.svg";
import Image from "next/image";
import { useClickOutside } from "@/hooks/use-click-outside";

export default function Export() {
  const [openExport, setOpenExport] = useState(false);

  const onClickOutside = () => {
    setOpenExport(false);
  };

  const clickRef = useClickOutside(onClickOutside);
  return (
    <div className="relative">
      <div className="border-2 border-[#C198FB] text-[#C198FB] text-sm rounded-[3px] w-[102px] flex divide-x justify-between divide-[#C198FB] cursor-pointer">
        <p className="flex justify-center items-center p-2">Export</p>
        <div
          className="w-[26px] flex justify-center"
          onClick={() => setOpenExport(!openExport)}
        >
          <Image src={ExportArrow} alt={"exportarrow"} className="" />
        </div>
      </div>

      {openExport && (
        <div className="w-[256px] border-2 border-[#C198FB] top-12 absolute rounded-[3px] h-36 bg-primary z-40 "
        
        ref={clickRef}
        ></div>
      )}
    </div>
  );
}
