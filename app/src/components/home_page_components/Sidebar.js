"use client";

import { useState } from "react";

export function Sidebar() {
  const [isTitleOpen, setIsOpen] = useState(true);

  function toggleCollapse() {
    setIsOpen(!isTitleOpen);
  }

  return (
    <div className="flex flex-col items-center max-w-56 bg-[#bcb4a5] text-[#196b24] grow my-2 text-xl text-center rounded-r-xl ">
      <div className=" flex flex-col items-center sticky top-0 ">
        <button className="text-4xl px-4 mt-4" onClick={toggleCollapse}>
          {"\u2261"}
        </button>
        {isTitleOpen && (
          <div className=" flex flex-col gap-4 w-[12vw] min-w-36 items-center mt-4">
            <div className="font-bold text-2xl">Taxable Property</div>
            <div className="font-bold">Real Property</div>
            <div className="text-base"> Primary Residential </div>
            <div className="text-base"> Non-Primary Residential </div>
            <div className="text-base"> Commercial </div>
            <div className="text-base"> Agricultural </div>
            <div className="text-base"> Unimproved </div>
            <div className="font-bold">Centrally Assessed</div>
            <div className="font-bold">Personal Property</div>
            <div className="text-base"> Age-based Property </div>
            <div className="text-base"> Fee-in-lieu </div>
            <div className="text-base"> Mobile Home </div>
          </div>
        )}
      </div>
    </div>
  );
}
