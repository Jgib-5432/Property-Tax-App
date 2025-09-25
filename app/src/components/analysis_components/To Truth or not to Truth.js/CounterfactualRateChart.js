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

export function CounterfactualRateChart() {
  const currentData = entityData.filter(
    (item) => item["Entity Name"] === "Tooele City, Tooele"
  );

  return (
    <div className="flex flex-col h-96 w-5/10 bg-white text-black p-4 gap-2 rounded-xl shadow-xl">
      <div className="text-center text-xl">
        {" "}
        Base Rate vs Counterfactual Rate: Tooele City
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
          <XAxis
            dataKey="Tax Year"
            padding={{ left: 40 }}
            tick={{ fontSize: 14 }}
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
            tick={{ fontSize: 14 }}
            tickFormatter={(number) => `${number.toFixed(2)}%`}
            label={{
              value: "Rate",
              offset: -25,
              angle: 0,
              position: "top",
            }}
          />
          <Tooltip formatter={(number) => `${number.toFixed(2)}`} />
          <Legend align="center" verticalAlign="bottom" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
