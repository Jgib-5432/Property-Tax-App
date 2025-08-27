"use client";

import entityData from "../../../public/data/base_data.json" with {type: 'arry'};
import { ControlPanel } from "@/components/profile_components/ControlPanel";
import {TaxRateGraph} from "@/components/profile_components/TaxRateGraph"
import {RevenueGraph} from "@/components/profile_components/RevenueGraph"
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

export function ProfileContent() {

  const [markdownContent, setMarkdownContent] = useState("");

  const [currentEntity, setCurrentEntity] = useState("Statewide")
  const currentData = entityData.filter(item => item["Entity Name"] === currentEntity )

  const changeEntity = (selectedOption) => {
    setCurrentEntity(selectedOption.value)
  }

  useEffect(() => {
    fetch("/text/entity profiles/Tax-Rate-Chart_des.md")
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, []);

  return (
    <div className="flex flex-row grow text-black my-2 mr-2">
      <ControlPanel onChangeEntity={changeEntity}/>
     <div className="flex flex-col grow text-2xl gap-4 p-4 bg-[#eeeeee] text-black rounded-xl shadow-xl/20 items-center ">
        <div className="flex flex-row  h-220 w-full gap-2">
          <TaxRateGraph currentEntity={currentEntity} currentData={currentData}/>
          <div className="flex flex-col h-full w-2/10 bg-white place-self-end justify-center items-center rounded-xl shadow-xl text-base p-4 indent-4 text-justify overflow-auto">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
          </div>
        </div>

        <div className="flex flex-row  h-220 w-full gap-2">
          <RevenueGraph currentEntity={currentEntity} currentData={currentData}/>
          <div className="flex flex-col h-full w-2/10 bg-white place-self-end justify-center items-center rounded-xl shadow-xl text-base p-4 indent-4 text-justify overflow-auto">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
          </div>

        </div>
      </div>
    </div>
  );
}