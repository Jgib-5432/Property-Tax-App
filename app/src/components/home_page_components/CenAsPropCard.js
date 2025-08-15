"use client";

import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

export function CenAsPropCard() {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch("/text/property types/cen_ast_des.md")
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  function toggleCollapse() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <button
        className="grid bg-white row-start-3 col-start-2 rounded-xl shadow-xl/20 p-2 gap-2 place-content-center text-2xl"
        onClick={toggleCollapse}
      >
        Centrally Assessed
      </button>
      {isOpen && (
        <div className="grid text-xl bg-white row-start-3 col-start-3 col-span-4 rounded-xl shadow-xl/20 p-4 gap-2 place-content-center px-8">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
      )}
    </>
  );
}
