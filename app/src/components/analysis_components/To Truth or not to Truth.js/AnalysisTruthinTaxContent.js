"use client";

import { Sandbox } from "@/components/analysis_components/To Truth or not to Truth.js/Sandbox";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export function AnalysisTruthinTaxContent() {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch("/text/analysis/Truth-in-Taxation_explain.md")
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, []);

  return (
    <div className="flex flex-col w-full p-4 items-center gap-8 text-center text-black">
      <div className="text-6xl italic">To Truth or Not to Truth:</div>
      <div className="text-4xl italic">
        How Truth in Taxation constrains Property Taxes
      </div>
      <div className="grid w-9/10 bg-[#eeeeee] text-lg text-justify indent-8 p-8 gap-4 rounded-xl shadow-xl overflow-auto">
        <p className="text-2xl text-center">Introduction</p>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>

      <div className="grid w-9/10 bg-[#eeeeee] text-lg text-justify indent-8 p-8 gap-4 rounded-xl shadow-xl overflow-auto">
        <p className="text-2xl text-center">Methodology</p>
        <p>
          High-minded tax theory is all well and good, but how do we know that
          the system is actually working? More importantly, how effective has it
          actually been at constraining the growth of property taxes? In order
          to answer this effectivly, let's look to Grantsville as an example of
          how Truth in Taxation opperates in practice. Below is a chart
          comparing the tax rate the city applied relative to the total value of
          property it taxed.
        </p>
        Chart of tax rate and total value Chart of total tax revenue
        <p>
          Notice how the tax rate and the value move in opposite direction. This
          is Truth in Taxation in action. As the total value of property within
          Grantsville has grown over the past decade, the tax rate has fallen in
          response.
        </p>
      </div>

      <div className="grid w-9/10 bg-[#eeeeee] text-lg text-justify indent-8 p-8 gap-4 rounded-xl shadow-xl overflow-auto">
        <p className="text-2xl text-center">Results</p>
        <p>
          Relative to a base year of 2014, total tax liabilty would be $2.3
          Billion higher today but for Truth in Taxation. See the Sandbox below
          to explore how Truth in Taxation has constrained the growth of
          property taxes by taxing entity.
        </p>
      </div>

      <div className="grid w-9/10 bg-[#eeeeee] text-lg text-justify indent-8 p-8 gap-4 rounded-xl shadow-xl overflow-auto">
        <p className="text-2xl text-center">Limitations</p>
        <p>Personal Property was excluded from this analysis.</p>
      </div>

      <div className="text-4xl">Sandbox </div>
      <Sandbox />
    </div>
  );
}
