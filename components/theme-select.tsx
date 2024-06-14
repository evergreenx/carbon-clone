import { themes } from "@/data";
import { useSelect } from "downshift";
import React, { useEffect } from "react";

import PaintIcon from "@/app/assets/paint.svg";

import ActiveIcon from "@/app/assets/active.svg";
import ArrowUp from "@/app/assets/arrowup.svg";
import ArrowDown from "@/app/assets/arrowdown.svg";

import Image from "next/image";
import classNames from "classnames";
import { useQueryState } from "nuqs";
import { useEditorUrlState } from "@/hooks/useEditorUrlState";
export default function ThemeSelect() {
  const [{ t }, setState] = useEditorUrlState();

  const [selectedItem, setSelectedItem] = React.useState<null | any>(t);
  const { isOpen, getToggleButtonProps, getMenuProps, getItemProps } =
    useSelect({
      items: themes,
      selectedItem,

      onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
        setSelectedItem(newSelectedItem);

        setState({
          t: newSelectedItem.name,
        });
      },
    });

  const cx = classNames;

  return (
    <div >
      <div className=" flex text-white lg:w-52 relative  ">
        <div className="border-2 text-white border-white border-r-0 rounded-l-[3px] w-[40px] flex justify-center items-center  h-[40px]">
          <Image src={PaintIcon} alt="painticon" />
        </div>
        <div
          className="p-2   flex items-center justify-between cursor-pointer h-[40px] text-sm border-2 
          rounded-r-[3px]  border-white w-full"
          {...getToggleButtonProps()}
        >
          <span className="capitalize">
            {selectedItem ? selectedItem.name || selectedItem : selectedItem}
          </span>
          <span className="px-2">
            {isOpen ? (
              <div className="rotate-180">
                <Image src={ArrowDown} alt="arrowdown" />
              </div>
            ) : (
              <>
                <Image src={ArrowUp} alt="arrowup" />
              </>
            )}
          </span>
        </div>
      </div>
      <ul
        className={`absolute max-h-[350px] w-52 lg:w-[176px] overflow-y-scroll text-white  border-2 rounded-b-[3px]   lg:ml-8
        rounded-l-[3px] z-50 border-white mt-[-2px] p-0  ${!isOpen && "hidden"}`}
        {...getMenuProps()}
      >
        {isOpen &&
          themes.map((item, index) => (
            <li
              className={cx(
                selectedItem === item && "font-bold",
                `bg-primary  hover:bg-[#1F1F1F] py-2 px-4 
               border-b-white border text-sm flex justify-between  text-left cursor-pointer capitalize`
              )}
              key={item.name}
              {...getItemProps({ item, index })}
            >
              <span>{item.name}</span>

              {selectedItem == item && (
                <Image src={ActiveIcon} alt="activeicon" />
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
