import React, { useState } from "react";

export default function CustomRange({
  initialValue = 50,
  min = 0,
  max = 100,
  label = "padding(vert)",
}) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<any>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className="relative h-[33px]  border border-white text-white overflow-hidden">
        {/* Range slider */}
        <div
          className="h-[33px] pointer-events-none inset-0 bg-[#393939] absolute w-full"
          style={{
            transform: `translate3d(${(value / (max - min)) * 100}%, 0, 0)`,
          }}
        ></div>
        <label className="h-[33px] absolute flex items-center justify-center text-xs left-[8px] capitalize">
          {label}
        </label>

        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          className="w-full h-3  bg-gray-300 rounded-full 
          outline-none appearance-none opacity-0 cursor-ew-resize"
        />
      </div>
    </>
  );
}
