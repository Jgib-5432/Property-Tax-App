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
        <div className="grid bg-white row-start-4 col-start-3 col-span-4 rounded-xl shadow-xl/20 p-2 gap-4 place-content-center text-xl indent-16 px-8 ">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
          <button className="text-2xl" onClick={toggleAgeCollapse}>
            Age-based Property{" "}
          </button>
          {isAgeOpen && <ReactMarkdown>{AgeContent}</ReactMarkdown>}
          <button className="text-2xl" onClick={toggleFeeCollapse}>
            Fee-in-lieu
          </button>
          {isFeeOpen && <ReactMarkdown>{FeeContent}</ReactMarkdown>}
          <button className="text-2xl" onClick={toggleMobCollapse}>
            Mobile Home
          </button>
          {isMobOpen && <ReactMarkdown>{MobContent}</ReactMarkdown>}
        </div>
      )}
    </>
  );
}
