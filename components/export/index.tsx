import React, { useState } from "react";
import ExportArrow from "@/app/assets/exportarrow.svg";
import Image from "next/image";
import { useClickOutside } from "@/hooks/use-click-outside";
import FileName from "./file-name";
import Download from "./download";

export default function Export({
  fileName,
  setFileName,
  handleDownloadPng,
  handleDownloadSvg,
}: {
  fileName: string;
  setFileName: (value: string) => void;
  handleDownloadPng: () => void;
  handleDownloadSvg: () => void;
}) {
  const [openExport, setOpenExport] = useState(false);

  const onClickOutside = () => {
    setOpenExport(false);
  };

  const clickRef = useClickOutside(onClickOutside);
  return (
    <div className="relative">
      <div className="border-2 mb-4 border-[#C198FB] text-[#C198FB] text-sm rounded-[3px] w-[102px] flex divide-x justify-between divide-[#C198FB] cursor-pointer">
        <p
          className="flex justify-center items-center p-2"
          onClick={handleDownloadPng}
        >
          Export
        </p>
        <div
          className="w-[26px] flex justify-center items-center "
          onClick={() => setOpenExport(!openExport)}
        >
          <Image src={ExportArrow} alt={"exportarrow"} className="" />
        </div>
      </div>

      {openExport && (
        <div
          className="w-[256px] flex divide-[#C198FB] flex-col divide-y border-2 border-[#C198FB] top-12 absolute rounded-[3px] h-36 bg-primary z-40 "
          ref={clickRef}
        >
          <FileName setFileName={setFileName} fileName={fileName} />
          <Download
            handleDownloadPng={handleDownloadPng}
            handleDownloadSvg={handleDownloadSvg}
          />
        </div>
      )}
    </div>
  );
}
