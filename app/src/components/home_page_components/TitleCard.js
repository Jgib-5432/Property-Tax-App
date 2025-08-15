"use client";

import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

export function TitleCard() {
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
    <div className="grid bg-white px-8 col-start-2 col-span-5 rounded-xl shadow-xl/20 text-xl indent-16 p-4">
      <button className="text-4xl my-2" onClick={toggleCollapse}>
        Taxable Property: Explained{" "}
      </button>
      {isOpen && <ReactMarkdown>{markdownContent}</ReactMarkdown>}
    </div>
  );
}
