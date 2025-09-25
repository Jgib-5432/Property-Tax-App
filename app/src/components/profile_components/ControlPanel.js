"use client";

import { useState } from "react";
import Select from "react-select";
import entityList from "../../../public/data/entity_list.json";
import propertyTypes from "../../../public/data/property_types_list.json";

export function ControlPanel({ onChangeEntity, onChangeTypes }) {
  const entityOptions = entityList;
  const propertyOptions = propertyTypes;

  const [isTitleOpen, setIsOpen] = useState(true);

  function toggleCollapse() {
    setIsOpen(!isTitleOpen);
  }

  return (
    <div className="flex flex-col h-[99vh] bg-[#bcb4a5] rounded-r-xl mr-2 text-[#196b24] sticky top-1 ">
      <div className="flex flex-col h-full sticky top-0">
        <button
          className="flex text-4xl px-4 mt-4 place-self-center rounded-xl hover:bg-[#c9c3b7]"
          onClick={toggleCollapse}
        >
          {"\u2261"}
        </button>
        {isTitleOpen && (
          <div className="flex flex-col h-full gap-4 w-[12vw] min-w-36 items-center mt-4">
            <div className="font-bold text-2xl">Control Panel </div>
            <div className="font-bold"> Taxing Entity</div>
            <Select options={entityOptions} onChange={onChangeEntity} />
            <div className="font-bold"> Property Types</div>
            <Select
              options={propertyOptions}
              isMulti
              onChange={onChangeTypes}
            />
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
