import React, { useState } from 'react'

export default function CustonRange() {

    const [value, setValue] = useState(50); // Initial value of the range

    const handleChange = (e:any) => {
      setValue(e.target.value);
    };
  
  return (
 <>
 
 
 <div className="relative h-[33px] border border-white text-white overflow-hidden">
        {/* Range slider */}

        <div
          className="h-[33px] pointer-events-none inset-0 bg-[#393939] absolute w-full"
          style={{ transform: `translate3d(${value}%, 0, 0)` }}
        ></div>
        <label className="h-[33px] absolute left-[8px]">padding(vert)</label>

        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="w-full h-3 bg-gray-300 rounded-full outline-none appearance-none opacity-0 cursor-ew-resize"
        />
      </div>
 
 
 </>
  )
}
