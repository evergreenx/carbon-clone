import React from "react";
import Padding from "./padding";
import DropShadow from "./drop-shadow";
import WindowControls from "./window-controls";

export default function WindowContainer() {
  return (
    <>

    <WindowControls />
      <Padding />
      <DropShadow />
    </>
  );
}
