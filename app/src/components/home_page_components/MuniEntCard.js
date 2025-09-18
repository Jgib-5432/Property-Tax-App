"use client";

import { useState } from "react";
import Link from "next/link";

export function MuniEntCard() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleCollapse() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <button
        className="grid bg-white row-start-7 col-start-2 rounded-xl shadow-xl/20 p-2 gap-2 place-content-center text-2xl"
        onClick={toggleCollapse}
      >
        Municipality
      </button>
      {isOpen && (
        <div className="grid text-xl bg-white row-start-7 col-start-3 col-span-4 rounded-xl shadow-xl/20 p-4 gap-2 place-content-center text-xl/8 indent-16 p-8 text-justify">
          <p>
            Municipalities are general purpose political subdivisions which are
            responsible for the provision of local services including building/
            maintaining various infrastructure, providing for the use of land,
            establishing public order and safety, among other local needs. State
            code empowers these entities to levy taxes on property under{" "}
            <Link href="https://le.utah.gov/xcode/Title10/Chapter6/10-6-S133.html?v=C10-6-S133_2021050520210701">
              10-6-133
            </Link>
            {"."}
          </p>
        </div>
      )}
    </>
  );
}
