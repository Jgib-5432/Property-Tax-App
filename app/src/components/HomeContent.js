"use client";

import { Sidebar } from "@/components/Sidebar";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

export function HomeContent() {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch("/text/property types/property_general_des.md")
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, []);

  const [isOpen, setIsOpen] = useState(true);

  function toggleCollapse() {
    setIsOpen(!isOpen);
  }

  return (
    <div className=" flex flex-row grow">
      <Sidebar />
      <div className="grid grid-cols-[10%_18%_18%_8%_18%_18%_10%] w-full p-2 bg-[#eeeeee] grow rounded-xl m-2 text-black gap-y-8 gap-x-1">
        <div className="grid bg-white px-8 col-start-2 col-span-5 rounded-xl shadow-xl/20 ">
          <button className="text-4xl -my-2" onClick={toggleCollapse}>
            Taxable Property: Explained{" "}
          </button>
          {isOpen && <ReactMarkdown>{markdownContent}</ReactMarkdown>}
        </div>
        <div className="grid bg-white row-start-2 col-start-2 rounded-xl shadow-xl/20 p-2 gap-2 place-content-center text-2xl">
          Real Property
        </div>
        <div className="grid bg-white row-start-2 col-start-3 col-span-4 rounded-xl shadow-xl/20 p-2 gap-2 place-content-center">
          <div>Real Property Summary </div>
          <div>Primary Residential</div>
          <div>Primary Residential</div>
        </div>
        <div className="grid bg-red-500 row-start-5 col-start-5 col-span-2 row-span-2">
          right
        </div>
      </div>
    </div>
  );
}
