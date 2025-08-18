import { useState } from "react";

export function ControlPanel() {
  const [isTitleOpen, setIsOpen] = useState(true);

  function toggleCollapse() {
    setIsOpen(!isTitleOpen);
  }

  return (
    <div className="flex flex-col bg-[#bcb4a5] rounded-r-xl mr-2 text-[#196b24]">
      <button className="text-4xl px-4 mt-4" onClick={toggleCollapse}>
        {"\u2261"}
      </button>
      {isTitleOpen && (
        <div className="flex flex-col gap-4 w-[12vw] min-w-36 items-center mt-4">
          <div className="font-bold text-2xl">Control Panel </div>
          <div className="font-bold"> Entity Type</div>
          <div className="font-bold"> Tax Year </div>
        </div>
      )}
    </div>
  );
}
