
import React, { useContext } from "react";

export default function FileName({ fileName, setFileName } : {
    fileName : string,
    setFileName : (value:string)=>void
}) {
  return (
    <div className="flex items-center w-full px-[16px] py-[8px]">
      <p className="text-[#C198FB] flex-1 text-xs mr-2">File Name</p>

      <input
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
        className="border-none text-[#C198FB]   text-xs outline-none bg-primary w-[70%] placeholder:text-xs placeholder:text-[#55436F]  p-2"
        placeholder="carbon"
      />
    </div>
  );
}
