import { useEditorUrlState } from "@/hooks/useEditorUrlState";
import React from "react";

export default function WindowsControlHeader() {
  const [{ wc, osType }, setState] = useEditorUrlState();

  return (
    <>
      {wc && (
        <div className="os    z-50 ml-[14px]">
          {osType === "m" ? (
            <div className="os absolute  top-10   right-4 z-50 ml-[14px]">
              <svg
                width="58"
                height="14"
                viewBox="0 0 58 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7H11"
                  stroke="#878787"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M35 1H25C24.4477 1 24 1.44772 24 2V12C24 12.5523 24.4477 13 25 13H35C35.5523 13 36 12.5523 36 12V2C36 1.44772 35.5523 1 35 1Z"
                  stroke="#878787"
                ></path>
                <path
                  d="M47 2L57 12"
                  stroke="#878787"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M47 12L57 2"
                  stroke="#878787"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          ) : osType === "w" ? (
            <div className="os absolute top-10  z-50  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="14"
                viewBox="0 0 54 14"
              >
                <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    fill="#FF5F56"
                    stroke="#E0443E"
                    strokeWidth=".5"
                  ></circle>
                  <circle
                    cx="26"
                    cy="6"
                    r="6"
                    fill="#FFBD2E"
                    stroke="#DEA123"
                    strokeWidth=".5"
                  ></circle>
                  <circle
                    cx="46"
                    cy="6"
                    r="6"
                    fill="#27C93F"
                    stroke="#1AAB29"
                    strokeWidth=".5"
                  ></circle>
                </g>
              </svg>
            </div>
          ) : (
            <div className="os absolute  top-10  w-[55px]  z-50  ">
              <svg viewBox="0 0 420 100" focusable="false">
                <circle
                  fill="transparent"
                  stroke="#ff5f57"
                  strokeWidth="16"
                  cx="50"
                  cy="50"
                  r="42"
                ></circle>
                <circle
                  fill="transparent"
                  stroke="#febc2e"
                  strokeWidth="16"
                  cx="210"
                  cy="50"
                  r="42"
                ></circle>
                <circle
                  fill="transparent"
                  stroke="#28c840"
                  strokeWidth="16"
                  cx="370"
                  cy="50"
                  r="42"
                ></circle>
              </svg>
            </div>
          )}
        </div>
      )}
    </>
  );
}
