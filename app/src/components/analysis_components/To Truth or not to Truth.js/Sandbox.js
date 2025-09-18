"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import entityData from "../../../../public/data/counterfactual_data.json";
import entityList from "../../../../public/data/entity_list.json";
import { useState } from "react";
import Select from "react-select";

export function Sandbox() {
  const [currentEntity, setCurrentEntity] = useState("Statewide");
  const currentData = entityData.filter(
    (item) => item["Entity Name"] === currentEntity
  );

  const changeEntity = (selectedOption) => {
    setCurrentEntity(selectedOption.value);
  };

  console.log(entityData);
  console.log(currentData);

  return (
    <div className="flex flex-row grow bg-[#eeeeee] text-black m-4 p-4 gap-4 rounded-xl shadow-xl overflow-auto">
      <div className="flex flex-col w-1/7 h-[150vh] gap-2 justify-between items-center">
        <div className="flex flex-col w-full  bg-white p-4 gap-2 rounded-xl shadow-xl justify-center">
          <p className="p-2 indent-4 text-center overflow-auto">
            This chart shows the observed tax rate in green relative to the
            counterfactual rate shown in purple. The black line is the
            difference between the two. The counterfactual rate shows what the
            tax rate would have been each year if Truth in Taxation had not been
            in place to contrain the growth of aggregate tax liability. The
            chart assumes that tax entities would not have voluntarily lowered
            their rates.
          </p>
        </div>

        <div className="flex flex-col w-full h-1/8 bg-[#bcb4a5] justify-center text-[#196b24] p-4 gap-2 rounded-xl shadow-xl overflow-visible items-center sticky top-0 bottom-0">
          <div className="text-2xl">Taxing Entity</div>
          <Select options={entityList} onChange={changeEntity} />
        </div>

        <div className="flex flex-col w-full bg-white p-4 gap-2 rounded-xl shadow-xl justify-center">
          <p className="p-2 indent-4 text-center overflow-auto">
            This chart shows the observed tax revenue in green relative to the
            counterfactual revenue shown in purple. The black line is the
            difference between the two. The counterfactual revenue shows what
            the total collections would have been each year if Truth in Taxation
            had not been in place to contrain the growth of aggregate tax
            liability. The chart assumes that tax entities would not have
            voluntarily lowered their revenue.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full h-[150vh]">
        <div className="flex flex-col grow bg-white text-black p-4 gap-2 rounded-xl shadow-xl overflow-auto">
          <div className="text-center text-2xl">
            {" "}
            Base vs Counterfactual Tax Rate: {currentEntity}
          </div>
          <ResponsiveContainer width="100%" height="95%">
            <LineChart data={currentData}>
              <CartesianGrid stroke="#eeeeee" />
              <Line
                type="linear"
                dataKey="Tax Rate"
                stroke="#196b24"
                strokeWidth={2}
              />
              <Line
                type="linear"
                dataKey="Counterfactual Tax Rate"
                stroke="#8b4aa8"
                strokeWidth={2}
              />
              <Line
                type="linear"
                dataKey="Rate Difference"
                stroke="#000000"
                strokeWidth={2}
              />
              <XAxis
                dataKey="Tax Year"
                padding={{ left: 40 }}
                tick={{ fontSize: 18 }}
                label={{
                  value: "Tax Year",
                  position: "insideBottomRight",
                  offset: 40,
                }}
              />
              <YAxis
                dataKey="Tax Rate"
                interval="preserveStart"
                domain={[0, (dataMax) => dataMax * 1.3]}
                tick={{ fontSize: 18 }}
                tickFormatter={(number) => `${number.toFixed(2)}%`}
              />
              <Tooltip formatter={(number) => `${number.toFixed(3)}%`} />
              <Legend align="center" verticalAlign="bottom" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col grow bg-white text-black p-4 gap-2 rounded-xl shadow-xl overflow-auto">
          <div className="text-center text-2xl">
            {" "}
            Base vs Counterfactual Revenue (M): {currentEntity}
          </div>
          <ResponsiveContainer width="100%" height="95%">
            <LineChart data={currentData}>
              <CartesianGrid stroke="#eeeeee" />
              <Line
                type="linear"
                dataKey="Base Revenue"
                stroke="#196b24"
                strokeWidth={2}
              />
              <Line
                type="linear"
                dataKey="Counterfactual Revenue"
                stroke="#8b4aa8"
                strokeWidth={2}
              />
              <Line
                type="linear"
                dataKey="Truth Dividend"
                stroke="#000000"
                strokeWidth={2}
              />
              <XAxis
                dataKey="Tax Year"
                padding={{ left: 40 }}
                tick={{ fontSize: 18 }}
                label={{
                  value: "Tax Year",
                  position: "insideBottomRight",
                  offset: 40,
                }}
              />
              <YAxis
                interval="preserveStart"
                domain={[0, (dataMax) => dataMax * 1.3]}
                tick={{ fontSize: 18 }}
                tickFormatter={(value) =>
                  new Intl.NumberFormat("en", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                  }).format(value)
                }
              />
              <Tooltip
                formatter={(value) =>
                  new Intl.NumberFormat("en", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(value)
                }
              />
              <Legend align="center" verticalAlign="bottom" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
