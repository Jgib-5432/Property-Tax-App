"use client";

import { useState } from "react";
import Select from "react-select";
import countiesList from "../../../public/data/counties_list.json";
import yearsList from "../../../public/data/years_list.json";
import entityTypesList from "../../../public/data/entity_types_list.json";

export function ControlPanel({
  onChangeEntType,
  onChangeCounty,
  onChangeYear,
}) {
  const [isTitleOpen, setIsOpen] = useState(true);

  function toggleCollapse() {
    setIsOpen(!isTitleOpen);
  }

  return (
    <div className="flex flex-col h-[99vh] bg-[#bcb4a5] rounded-r-xl mr-2 text-[#196b24] sticky top-1">
      <div className="flex flex-col h-full sticky top-0 ">
        <button
          className="flex text-4xl px-4 mt-4 place-self-center"
          onClick={toggleCollapse}
        >
          {"\u2261"}
        </button>
        {isTitleOpen && (
          <div className="flex flex-col h-full gap-4 w-[12vw] min-w-36 items-center mt-4">
            <div className="font-bold text-2xl">Control Panel </div>
            <div className="font-bold"> Taxing Entity Type</div>
            <Select
              isMulti
              options={entityTypesList}
              onChange={onChangeEntType}
            />
            <div className="font-bold"> County</div>
            <Select isMulti options={countiesList} onChange={onChangeCounty} />
            <div className="font-bold"> Tax Year</div>
            <Select options={yearsList} onChange={onChangeYear} />
            <div className="flex flex-col p-4 mt-auto sticky bottom-0">
              *Rounding and floating point errors may produce artifacts in
              tooltip values.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
