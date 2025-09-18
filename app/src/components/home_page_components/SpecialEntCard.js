"use client";

import { useState } from "react";
import Link from "next/link";

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
          <p>
            Special Districts are limited purpose local government entities
            which are set up to provide a specific service. State code
            contemplates 12 types of special districts in&nbsp;
            <Link href="https://le.utah.gov/xcode/Title17B/Chapter2A/17B-2a.html?v=C17B-2a_2023022720230227">
              17B-2a
            </Link>
            : Cemetary Maintenance, Drainage, Fire Protection, Improvement,
            Irrigation, Metropolitan Water, Mosquito Abatement, Public Transit,
            Service Area, Water Conservancy, Municipal Service, and
            Infrastructure Financing. Special Districts are created with
            property taxing authority as described in&nbsp;
            <Link href="https://le.utah.gov/xcode/Title17B/Chapter1/17B-1-S103.html?v=C17B-1-S103_2024050120240501">
              17B-1-103
            </Link>
            .
          </p>
        </div>
      )}
    </>
  );
}
