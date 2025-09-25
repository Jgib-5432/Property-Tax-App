"use client";

import entityData from "../../../public/data/base_data.json" with {type: 'arry'};
import { ControlPanel } from "@/components/statewide_comparison/ControlPanel";
import { useState } from "react";
import {ShareCompGraph} from "@/components/statewide_comparison/ShareCompGraph"
import {ValueCompGraph} from "@/components/statewide_comparison/ValueCompGraph"
import countiesList from "../../../public/data/counties_list.json";


export function StatewideContent() {
  const sortedData = entityData.sort((a,b) => b["Primary Residential, Share"] - a["Primary Residential, Share"])

  const counties = countiesList.map(a => a.value)

  const [currentTypes, setCurrentEntType] = useState(["County"])
  const [currentCounties, setCurrentCounties] = useState(counties)
  const [currentYear, setCurrentYear] = useState(2024)
 
  const changeEntType = (selectedEntTypes) => {
    setCurrentEntType(selectedEntTypes.map(type =>type.value))
  }

  const changeCounties = (selectedCounties) => {
    setCurrentCounties(selectedCounties.map(type =>type.value))
  }

  const changeYear =(selectedOption) => {
    setCurrentYear(selectedOption.value)
  }

  const currentData = sortedData.filter(item => currentTypes.includes(item["Entity Type"]) && item["Tax Year"]===currentYear && currentCounties.includes(item["County Name"]))


  return (
        <div className="flex flex-row grow text-black my-2 mr-2">
          <ControlPanel onChangeEntType={changeEntType} onChangeCounty={changeCounties} onChangeYear={changeYear}/>
         <div className="flex flex-col grow text-2xl gap-4 p-4 bg-[#eeeeee] text-black rounded-xl shadow-xl/20 items-center ">
            <div className="flex flex-row  h-200 w-full gap-2">
          <ShareCompGraph  currentData={currentData} currentYear={currentYear}/>
            </div>
          <div className="flex flex-row  h-200 w-full gap-2">
          <ValueCompGraph  currentData={currentData} currentYear={currentYear}/>
            </div>
          </div>
        </div>
  );
}

