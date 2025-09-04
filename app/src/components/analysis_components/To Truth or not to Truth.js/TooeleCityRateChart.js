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

export function TooeleCityRateChart() {
  const currentData = entityData.filter(
    (item) => item["Entity Name"] === "Tooele city, Tooele"
  );

  return (
    <div className="flex flex-col h-96 w-5/10 bg-white text-black p-4 gap-2 rounded-xl shadow-xl">
      <div className="text-center text-xl">
        {" "}
        Tax Rate & Total Taxable Property: Tooele City
      </div>
      <ResponsiveContainer width="100%" height="95%">
        <LineChart data={currentData}>
          <CartesianGrid stroke="#eeeeee" />
          <Line
            type="linear"
            yAxisId="left"
            dataKey="Tax Rate"
            stroke="#196b24"
            strokeWidth={2}
          />
          <Line
            type="linear"
            yAxisId="right"
            dataKey="Baseline Property"
            stroke="#111111"
            strokeWidth={2}
          />
          <XAxis
            dataKey="Tax Year"
            padding={{ left: 40 }}
            tick={{ fontSize: 14 }}
          />
          <YAxis
            dataKey="Tax Rate"
            yAxisId="left"
            interval="preserveStart"
            domain={[0, (dataMax) => dataMax * 1.3]}
            tick={{ fontSize: 14 }}
            tickFormatter={(number) => `${number.toFixed(2)}%`}
          />
          <YAxis
            dataKey="Baseline Property"
            yAxisId="right"
            orientation="right"
            interval="preserveStart"
            tick={{ fontSize: 14 }}
            tickFormatter={(number) => `$${number.toFixed(1)} (B)`}
          />
          <Tooltip
            yAxisId="right"
            formatter={(number) => `${number.toFixed(2)}`}
          />
          <Legend align="center" verticalAlign="bottom" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
