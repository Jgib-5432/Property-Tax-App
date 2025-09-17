"use client";

import { useState } from "react";

export function SpecialEntCard() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleCollapse() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <button
        className="grid bg-white row-start-9 col-start-2 rounded-xl shadow-xl/20 p-2 gap-2 place-content-center text-2xl"
        onClick={toggleCollapse}
      >
        Special District
      </button>
      {isOpen && (
        <div className="grid text-xl bg-white row-start-9 col-start-3 col-span-4 rounded-xl shadow-xl/20 p-4 gap-2 place-content-center text-xl/8 indent-16 p-8 text-justify">
          <p>Special District 11-42-401 17B-1-103</p>
        </div>
      )}
    </>
  );
}
