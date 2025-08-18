"use client";

import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

export function PerPropCard() {
  const [markdownContent, setMarkdownContent] = useState("");
  const [AgeContent, setAgeContent] = useState("");
  const [FeeContent, setFeeContent] = useState("");
  const [MobContent, setMobContent] = useState("");

  useEffect(() => {
    fetch("/text/property types/prs_prop_des.md")
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, []);

  useEffect(() => {
    fetch("/text/property types/age_base_des.md")
      .then((response) => response.text())
      .then((text) => setAgeContent(text));
  }, []);

  useEffect(() => {
    fetch("/text/property types/fee_lieu_des.md")
      .then((response) => response.text())
      .then((text) => setFeeContent(text));
  }, []);

  useEffect(() => {
    fetch("/text/property types/mob_home_des.md")
      .then((response) => response.text())
      .then((text) => setMobContent(text));
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [isAgeOpen, setIsAgeOpen] = useState(false);
  const [isFeeOpen, setIsFeeOpen] = useState(false);
  const [isMobOpen, setIsMobOpen] = useState(false);

  function toggleCollapse() {
    setIsOpen(!isOpen);
  }
  function toggleAgeCollapse() {
    setIsAgeOpen(!isAgeOpen);
  }
  function toggleFeeCollapse() {
    setIsFeeOpen(!isFeeOpen);
  }
  function toggleMobCollapse() {
    setIsMobOpen(!isMobOpen);
  }

  return (
    <>
      <button
        className="grid bg-white row-start-4 col-start-2 rounded-xl shadow-xl/20 p-2 gap-4 place-content-center text-2xl"
        onClick={toggleCollapse}
      >
        Personal Property
      </button>
      {isOpen && (
        <div className="grid bg-white row-start-4 col-start-3 col-span-4 rounded-xl shadow-xl/20 p-2 gap-4 place-content-center text-xl/8 indent-16 p-8 text-justify">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
          <button
            className="flex text-2xl place-self-center"
            onClick={toggleAgeCollapse}
          >
            <p className="flex mr-2">Age-based Property </p>
            {"\u2335"}{" "}
          </button>
          {isAgeOpen && <ReactMarkdown>{AgeContent}</ReactMarkdown>}
          <button
            className="flex text-2xl place-self-center"
            onClick={toggleFeeCollapse}
          >
            <p className="flex mr-2">Fee-in-Lieu </p>
            {"\u2335"}{" "}
          </button>
          {isFeeOpen && <ReactMarkdown>{FeeContent}</ReactMarkdown>}
          <button
            className="flex text-2xl place-self-center"
            onClick={toggleMobCollapse}
          >
            <p className="flex mr-2">Mobile Home </p>
            {"\u2335"}{" "}
          </button>
          {isMobOpen && <ReactMarkdown>{MobContent}</ReactMarkdown>}
        </div>
      )}
    </>
  );
}
