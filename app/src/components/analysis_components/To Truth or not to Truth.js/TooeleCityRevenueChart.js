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

export function TooeleCityRevenueChart() {
  const currentData = entityData.filter(
    (item) => item["Entity Name"] === "Tooele city, Tooele"
  );

  return (
    <div className="flex flex-col h-96 w-5/10 bg-white text-black p-4 gap-2 rounded-xl shadow-xl">
      <div className="text-center text-xl"> Tax Revenue: Tooele City</div>
      <ResponsiveContainer width="100%" height="95%">
        <LineChart data={currentData}>
          <CartesianGrid stroke="#eeeeee" />
          <Line
            type="linear"
            dataKey="Base Revenue"
            stroke="#196b24"
            strokeWidth={2}
          />
          <XAxis
            dataKey="Tax Year"
            padding={{ left: 40 }}
            tick={{ fontSize: 14 }}
          />
          <YAxis
            dataKey="Base Revenue"
            interval="preserveStart"
            domain={[(dataMin) => dataMin * 0.5, (dataMax) => dataMax * 1.3]}
            tick={{ fontSize: 14 }}
            tickFormatter={(number) => `$${number.toFixed(1)} (M)`}
          />
          <Tooltip formatter={(number) => `$${number.toFixed(1)} (M)`} />
          <Legend align="center" verticalAlign="bottom" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
