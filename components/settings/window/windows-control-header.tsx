import { useEditorUrlState } from "@/hooks/useEditorUrlState";
import Image from "next/image";
import React from "react";
import Osm from '@/app/assets/osm.svg'
import Osw from '@/app/assets/osw.svg'
import Osw2 from '@/app/assets/osw2.svg'



export default function WindowsControlHeader() {
  const [{ wc, osType }] = useEditorUrlState();

  return (
    <div className="relative mx-auto max-w-[100%] ">
      {wc && (
        <div className="os    z-50 ml-[14px]">
          {osType === "m" ? (
            <div className="os absolute top-4 right-4 z-50 ml-[14px]">
         
         <Image alt="osm" src={Osm} />
            </div>
          ) : osType === "w" ? (
            <div className="os absolute top-4 z-50  ">
         <Image alt="osw" src={Osw} />

            </div>
          ) : (
            <div className="os absolute top-4 w-[55px]  z-50  ">
         <Image alt="osw2" src={Osw2} />
            
            </div>
          )}
        </div>
      )}
    </div>
  );
}
