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
        className="grid bg-white row-start-2 col-start-2 rounded-xl shadow-xl/20 place-content-center p-8 gap-2 text-2xl"
        onClick={toggleCollapse}
      >
        Real Property
      </button>

      {isOpen && (
        <div className="grid bg-white row-start-2 col-start-3 col-span-4 rounded-xl shadow-xl/20 p-2 gap-4 place-content-center text-xl/8 indent-16 p-8 text-justify">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>

          <button
            className="flex text-2xl place-self-center "
            onClick={togglePrimeCollapse}
          >
            <p className="flex mr-2">Primary Residential </p>
            {"\u2335"}
          </button>
          {isPrimeOpen && <ReactMarkdown>{primeContent}</ReactMarkdown>}

          <button
            className="flex text-2xl place-self-center"
            onClick={toggleNonPrimeCollapse}
          >
            <p className="flex mr-2">Non-Primary Residential </p>
            {"\u2335"}{" "}
          </button>
          {isNonPrimeOpen && <ReactMarkdown>{nonPrimeContent}</ReactMarkdown>}

          <button
            className="flex text-2xl place-self-center"
            onClick={toggleComCollapse}
          >
            <p className="flex mr-2">Commercial </p>
            {"\u2335"}{" "}
          </button>
          {isComOpen && <ReactMarkdown>{comContent}</ReactMarkdown>}

          <button
            className="flex text-2xl place-self-center"
            onClick={toggleAggCollapse}
          >
            <p className="flex mr-2">Agricultural </p>
            {"\u2335"}
          </button>
          {isAggOpen && <ReactMarkdown>{aggContent}</ReactMarkdown>}

          <button
            className="flex text-2xl place-self-center"
            onClick={toggleUniCollapse}
          >
            <p className="flex mr-2">Unimproved</p>
            {"\u2335"}{" "}
          </button>
          {isUniOpen && <ReactMarkdown>{uniContent}</ReactMarkdown>}
        </div>
      )}
    </>
  );
}
