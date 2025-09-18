"use client";

import { useState } from "react";
import Link from "next/link";

export function ServiceEntCard() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleCollapse() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <button
        className="grid bg-white row-start-10 col-start-2 rounded-xl shadow-xl/20 p-2 gap-2 place-content-center text-2xl"
        onClick={toggleCollapse}
      >
        Special Service District
      </button>
      {isOpen && (
        <div className="grid text-xl bg-white row-start-10 col-start-3 col-span-4 rounded-xl shadow-xl/20 p-4 gap-2 place-content-center text-xl/8 indent-16 p-8 text-justify">
          <p>
            Special Service Districts are limited purpose local government
            entities which can be created in accordance with&nbsp;
            <Link href="https://le.utah.gov/xcode/Title17D/Chapter1/17D-1-P2.html?v=C17D-1-P2_1800010118000101">
              17D-1-2
            </Link>
            &nbsp;to provide one or more services relating to water, sewerage,
            drainage, flood control, garbage disposal, healthcare,
            transportation, recreation, fire protection, prison services, street
            lighting, emergency dispatch, animal shelter and control, federal
            mining leases, landslide control, some energy infrastructure, and
            cemetery services. The primary difference between these and special
            districts is the taxing authority for a special service district
            ultimately remains with the creating entity&nbsp;
            <Link href="https://le.utah.gov/xcode/Title17D/Chapter1/17D-1-S105.html?v=C17D-1-S105_180001011800010101">
              (17D-1-105)
            </Link>
            .
          </p>
        </div>
      )}
    </>
  );
}
