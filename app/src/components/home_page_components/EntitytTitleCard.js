"use client";

import { useState } from "react";
import Link from "next/link";

export function EntityTitleCard() {
  const [isOpen, setIsOpen] = useState(true);

  function toggleCollapse() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="grid bg-white px-8 col-start-2 col-span-5 rounded-xl shadow-xl/20 text-xl/8 indent-16 gap-4 p-8 text-justify">
      <button className="text-4xl my-2" onClick={toggleCollapse}>
        Taxing Entities: Explained{" "}
      </button>
      {isOpen && (
        <p>
          Taxing entities are typically political subdivisions of the state
          which are authorized to levy taxes on property within their
          jurisdiction. Information regarding what tax rates are charged, how
          much revenue is collected, and the value of the tax base can be found
          on the&nbsp;
          <Link href="/pages/entity_profiles">Entity Profiles</Link>
          &nbsp;page. Click on the entity types below to learn more.
        </p>
      )}
    </div>
  );
}
