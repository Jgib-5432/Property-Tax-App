"use client";

import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

export function RealPropCard() {
  const [markdownContent, setMarkdownContent] = useState("");
  const [primeContent, setPrimeContent] = useState("");
  const [nonPrimeContent, setNonPrimeContent] = useState("");
  const [comContent, setComContent] = useState("");
  const [aggContent, setAggContent] = useState("");
  const [uniContent, setUniContent] = useState("");

  useEffect(() => {
    fetch("/text/property types/real_property_des.md")
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, []);

  useEffect(() => {
    fetch("/text/property types/prime_res_des.md")
      .then((response) => response.text())
      .then((text) => setPrimeContent(text));
  }, []);

  useEffect(() => {
    fetch("/text/property types/non_prime_res_des.md")
      .then((response) => response.text())
      .then((text) => setNonPrimeContent(text));
  }, []);

  useEffect(() => {
    fetch("/text/property types/commercial_des.md")
      .then((response) => response.text())
      .then((text) => setComContent(text));
  }, []);

  useEffect(() => {
    fetch("/text/property types/agg_des.md")
      .then((response) => response.text())
      .then((text) => setAggContent(text));
  }, []);

  useEffect(() => {
    fetch("/text/property types/unimproved_des.md")
      .then((response) => response.text())
      .then((text) => setUniContent(text));
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [isPrimeOpen, setPrimeIsOpen] = useState(false);
  const [isNonPrimeOpen, setNonPrimeIsOpen] = useState(false);
  const [isComOpen, setComIsOpen] = useState(false);
  const [isAggOpen, setAggIsOpen] = useState(false);
  const [isUniOpen, setUniIsOpen] = useState(false);

  function toggleCollapse() {
    setIsOpen(!isOpen);
  }

  function togglePrimeCollapse() {
    setPrimeIsOpen(!isPrimeOpen);
  }

  function toggleNonPrimeCollapse() {
    setNonPrimeIsOpen(!isNonPrimeOpen);
  }

  function toggleComCollapse() {
    setComIsOpen(!isComOpen);
  }

  function toggleAggCollapse() {
    setAggIsOpen(!isAggOpen);
  }

  function toggleUniCollapse() {
    setUniIsOpen(!isUniOpen);
  }

  return (
    <>
      <button
        className="grid bg-white row-start-2 col-start-2 rounded-xl shadow-xl/20 p-2 gap-2 place-content-center text-2xl"
        onClick={toggleCollapse}
      >
        Real Property
      </button>
      {isOpen && (
        <div className="grid bg-white row-start-2 col-start-3 col-span-4 rounded-xl shadow-xl/20 p-2 gap-4 place-content-center text-xl indent-16 px-8">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>

          <button className="text-2xl" onClick={togglePrimeCollapse}>
            Primary Residential
          </button>
          {isPrimeOpen && <ReactMarkdown>{primeContent}</ReactMarkdown>}

          <button className="text-2xl" onClick={toggleNonPrimeCollapse}>
            Non-Primary Residential
          </button>
          {isNonPrimeOpen && <ReactMarkdown>{nonPrimeContent}</ReactMarkdown>}

          <button className="text-2xl" onClick={toggleComCollapse}>
            Commercial{" "}
          </button>
          {isComOpen && <ReactMarkdown>{comContent}</ReactMarkdown>}

          <button className="text-2xl" onClick={toggleAggCollapse}>
            Agricultural{" "}
          </button>
          {isAggOpen && <ReactMarkdown>{aggContent}</ReactMarkdown>}

          <button className="text-2xl" onClick={toggleUniCollapse}>
            Unimporved
          </button>
          {isUniOpen && <ReactMarkdown>{uniContent}</ReactMarkdown>}
        </div>
      )}
    </>
  );
}
