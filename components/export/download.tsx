import React from "react";

export default function Download({
  handleDownloadPng,
  handleDownloadSvg,
}: {
  handleDownloadPng: () => void;
  handleDownloadSvg: () => void;
}) {
  return (
    <div className="text-[#C198FB] px-[16px] py-[8px]">
      <p className="text-xs text-[#C198FB]">Download</p>

      <div className="image-format my-3">
        <div className="flex space-x-3 text-xs">
          <p
            onClick={handleDownloadPng}
            className="text-[#55436F] cursor-pointer hover:text-[#C198FB]"
          >
            PNG
          </p>

          <p
            onClick={handleDownloadSvg}
            className="text-[#55436F] cursor-pointer hover:text-[#C198FB]"
          >
            SVG
          </p>
        </div>
      </div>
    </div>
  );
}
