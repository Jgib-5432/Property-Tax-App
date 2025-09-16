"use client";

import { useState } from "react";
import Link from "next/link";

export function SchoolEntCard() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleCollapse() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <button
        className="grid bg-white row-start-8 col-start-2 rounded-xl shadow-xl/20 p-2 gap-2 place-content-center text-2xl"
        onClick={toggleCollapse}
      >
        School District
      </button>
      {isOpen && (
        <div className="grid text-xl bg-white row-start-8 col-start-3 col-span-4 rounded-xl shadow-xl/20 p-4 gap-2 place-content-center text-xl/8 indent-16 p-8 text-justify">
          <p>
            School districts are the primary entities responsible for the
            provision of public K-12 eduction in the state. To support these
            efforts, the districts levy property taxes under{" "}
            <Link href="https://le.utah.gov/xcode/Title53F/Chapter8/53F-8-S201.html?v=C53F-8-S201_2019051420190514">
              53F-8-201
            </Link>
            {". "}
            In addition to property taxes, school districts also recived funding
            from the state through the Minimum School Program.
          </p>
        </div>
      )}
    </>
  );
}
