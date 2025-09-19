"use client";

import entityData from "../../../public/data/base_data.json" with {type: 'arry'};
import { ControlPanel } from "@/components/profile_components/ControlPanel";
import {TaxRateGraph} from "@/components/profile_components/TaxRateGraph"
import {ValueGraph} from "@/components/profile_components/ValueGraph"
import {ShareGraph} from "@/components/profile_components/ShareGraph"
import ReactMarkdown from "react-markdown";
import { useEffect, useState, useRef } from "react";

export function ProfileContent() {
  
  const [currentEntity, setCurrentEntity] = useState("Statewide")
  const currentData = entityData.filter(item => item["Entity Name"] === currentEntity )

  const changeEntity = (selectedOption) => {
    setCurrentEntity(selectedOption.value)
  }

  const [currentTypes, setCurrentTypes] = useState(['Primary Residential', 'Commercial', 'Centrally Assessed'])

  const changeTypes = (selectedTypes) => {
    setCurrentTypes(selectedTypes.map(type =>type.value))
  }

  const [rateContent, setRateContent] = useState("");
  const [valueContent, setValueContent] = useState("");
  const [shareContent, setShareContent] = useState("");


  useEffect(() => {
    fetch("/text/entity profiles/Tax-Rate-Chart_des.md")
      .then((response) => response.text())
      .then((text) => setRateContent(text));
  }, []);


    useEffect(() => {
    fetch("/text/entity profiles/Value-Chart_des.md")
      .then((response) => response.text())
      .then((text) => setValueContent(text));
  }, []);

    useEffect(() => {
    fetch("/text/entity profiles/Share-Chart_des.md")
      .then((response) => response.text())
      .then((text) => setShareContent(text));
  }, []);

  const userGuideRef = useRef(null);

    const openDialog = () => {
    userGuideRef.current.showModal();
  };

  const closeDialog = () => {
    userGuideRef.current.close();
  };

  return (
    <div className="flex flex-row grow text-black my-2 mr-2">
      <ControlPanel onChangeEntity={changeEntity} onChangeTypes={changeTypes}/>
     <div className="flex flex-col grow text-2xl gap-4 p-4 bg-[#eeeeee] text-black rounded-xl shadow-xl/20 items-center ">
        <div className="flex flex-row  h-180 w-full gap-2">
          <TaxRateGraph currentEntity={currentEntity} currentData={currentData}/>
          <div className="flex flex-col w-2/10 bg-white place-self-end justify-center items-center self-center rounded-xl shadow-xl text-base p-4 indent-4 text-center overflow-auto">
          <ReactMarkdown>{rateContent}</ReactMarkdown>
          </div>
        </div>

        <div className="flex flex-row h-180 w-full gap-2">
          <ValueGraph currentEntity={currentEntity} currentData={currentData} currentTypes= {currentTypes}/>
          <div className="flex flex-col w-2/10 bg-white place-self-end justify-center items-center self-center rounded-xl shadow-xl text-base p-4 indent-4 text-center overflow-auto">
          <ReactMarkdown>{valueContent}</ReactMarkdown>
          </div>
        </div>

        <div className="flex flex-row  h-180 w-full gap-2">
          <ShareGraph currentEntity={currentEntity} currentData={currentData} currentTypes= {currentTypes}/>
          <div className="flex flex-col w-2/10 bg-white place-self-end justify-center items-center self-center rounded-xl shadow-xl text-base p-4 indent-4 text-center overflow-auto">
          <ReactMarkdown>{shareContent}</ReactMarkdown>
          </div>
        </div>

      </div>

      <dialog ref={userGuideRef} open>
        Test
        <button onClick={closeDialog} className="border-[1px]">close</button>
      </dialog>

    </div>
  );
}

/*

import {RevenueGraph} from "@/components/profile_components/RevenueGraph"


const [revenueContent, setRevenueContent] = useState("");

    useEffect(() => {
    fetch("/text/entity profiles/Revenue-Chart_des.md")
      .then((response) => response.text())
      .then((text) => setRevenueContent(text));
  }, []);

*/