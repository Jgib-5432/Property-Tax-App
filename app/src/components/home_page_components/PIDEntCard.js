"use client";

import { useState } from "react";
import Link from "next/link";

export function PIDEntCard() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleCollapse() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <button
        className="grid bg-white row-start-11 col-start-2 rounded-xl shadow-xl/20 p-2 gap-2 place-content-center text-2xl"
        onClick={toggleCollapse}
      >
        Public Infrastructure District
      </button>
      {isOpen && (
        <div className="grid text-xl bg-white row-start-11 col-start-3 col-span-4 rounded-xl shadow-xl/20 p-4 gap-2 place-content-center text-xl/8 indent-16 p-8 text-justify">
          <p>
            A Public Infrastructure District is a special purpose local
            government entity which (as the name implies) is aimed at developing
            and/or improving infrastrucutre for the public benefit. These can be
            created by cities, counties, or other local government entities as
            defined in&nbsp;
            <Link href="https://le.utah.gov/xcode/Title17D/Chapter4/17D-4-S201.html?v=C17D-4-S201_2025032520250507">
              17D-4-201
            </Link>
            . PIDs are created with property taxing authority as described
            in&nbsp;
            <Link href="https://le.utah.gov/xcode/Title17D/Chapter4/17D-4-S303.html?v=C17D-4-S303_2025032520250507">
              17D-4-303
            </Link>
            .
          </p>
        </div>
      )}
    </>
  );
}
