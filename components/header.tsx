import Image from "next/image";
import React from "react";
import Logo from "@/app/assets/logo.svg";


export default function Header() {


  return (
    <header className=" mb-16 mx-auto flex justify-center flex-col">
      <div className="logo mx-auto">
        <Image src={Logo} alt="logo" />
      </div>
      <p className="text-2xl font-medium text-white text-center mt-8">
        Create and share beautiful images of your source code.
        <br />
        Start typing or drop a file into the text area to get started.
      </p>
    </header>
  );
}
