"use client";

import entityData from "../../../public/data/base_data.json" with {type: 'arry'};
import { ControlPanel } from "@/components/profile_components/ControlPanel";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

export function ProfileContent() {

  const filteredData = entityData.filter(item => item["Entity Name"] === "Tooele" )

  return (
    <div className="flex flex-row grow text-black my-2 mr-2">
      <ControlPanel />
      <div className="flex flex-col grow text-2xl gap-4 p-4 bg-[#eeeeee] text-black rounded-xl shadow-xl/20 items-center ">
        Entity Profiles
        <div className="flex flex-row h-full w-full">
          <div className="flex h-full w-2/10 bg-black place-self-end justify-center items-center gap-4 rounded-xl shadow-xl"></div>
          <div className="flex h-full w-8/10 bg-white place-self-end justify-center items-center gap-4 rounded-xl shadow-xl">
            <ResponsiveContainer>
              <LineChart
                width={100}
                height={80}
                data={filteredData}
              >
                <XAxis dataKey="Tax Year" />
                <YAxis />
                <Line type="monotone" dataKey="Tax Rate" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
