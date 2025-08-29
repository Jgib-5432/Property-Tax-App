"use client";

import { useState } from "react";
import Select from "react-select";
import entityList from "../../../public/data/entity_list.json";

export function ControlPanel({ onChangeEntity }) {
  const options = entityList;

  const [isTitleOpen, setIsOpen] = useState(true);

  function toggleCollapse() {
    setIsOpen(!isTitleOpen);
  }

  return (
    <div className="flex flex-col bg-[#bcb4a5] rounded-r-xl mr-2 text-[#196b24] ">
      <div className="sticky top-0 ">
        <button
          className="flex text-4xl px-4 mt-4 place-self-center"
          onClick={toggleCollapse}
        >
          {"\u2261"}
        </button>
        {isTitleOpen && (
          <div className="flex flex-col gap-4 w-[12vw] min-w-36 items-center mt-4">
            <div className="font-bold text-2xl">Control Panel </div>
            <div className="font-bold"> Taxing Entity</div>
            <Select options={options} onChange={onChangeEntity} />
          </div>
        )}
      </div>
    </div>
  );
}
