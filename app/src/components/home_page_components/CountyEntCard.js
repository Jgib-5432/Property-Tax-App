"use client";

import { useState } from "react";
import Link from "next/link";

export function CountyEntCard() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleCollapse() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <button
        className="grid bg-white row-start-6 col-start-2 rounded-xl shadow-xl/20 p-2 gap-2 place-content-center text-2xl"
        onClick={toggleCollapse}
      >
        County
      </button>
      {isOpen && (
        <div className="grid text-xl bg-white row-start-6 col-start-3 col-span-4 rounded-xl shadow-xl/20 p-4 gap-2 place-content-center text-xl/8 indent-16 p-8 text-justify">
          <p>
            The 29 counties of the state each levy a property tax to fund the
            general operations and services for which they are responsible. This
            taxing authority is found in section&nbsp;
            <Link href="https://le.utah.gov/xcode/Title17/Chapter53/17-53-S220.html?v=C17-53-S220_1800010118000101">
              17-53-220
            </Link>
            &nbsp;of the state code. Counties spend revenue on a variety of
            functions including public works, local law enforcement, elections
            services, health departments, and administrative functions like
            assessing, surveying, recording, etc.
          </p>
        </div>
      )}
    </>
  );
}
