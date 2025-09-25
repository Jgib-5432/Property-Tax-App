import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export function ShareGraph({ currentEntity, currentData, currentTypes }) {
  return (
    <div className="flex flex-col h-full w-full p-2 gap-2 bg-white place-self-end justify-center items-center rounded-xl shadow-xl">
      <div>Share of Taxable Value (%): {currentEntity} </div>
      <ResponsiveContainer width="95%" height="95%">
        <AreaChart data={currentData}>
          <CartesianGrid stroke="#eeeeee" />
          {currentTypes.includes("Primary Residential") && (
            <Area
              type="linear"
              stackId="1"
              dataKey="Primary Residential, Share"
              stroke="#196b24"
              fill="#196b24"
              strokeWidth={2}
            />
          )}
          {currentTypes.includes("Non-primary Residential") && (
            <Area
              type="linear"
              stackId="1"
              dataKey="Non-primary Residential, Share"
              stroke="#8ca890"
              fill="#8ca890"
              strokeWidth={2}
            />
          )}
          {currentTypes.includes("Commercial") && (
            <Area
              type="linear"
              stackId="1"
              dataKey="Commercial, Share"
              stroke="#5e5a52"
              fill="#5e5a52"
              strokeWidth={2}
            />
          )}
          {currentTypes.includes("Agricultural") && (
            <Area
              type="linear"
              stackId="1"
              dataKey="Agricultural, Share"
              stroke="#cccccc"
              fill="#cccccc"
              strokeWidth={2}
            />
          )}
          {currentTypes.includes("Unimproved") && (
            <Area
              type="linear"
              stackId="1"
              dataKey="Unimproved, Share"
              stroke="#000000"
              fill="#000000"
              strokeWidth={2}
            />
          )}
          {currentTypes.includes("Total Real Property") && (
            <Area
              type="linear"
              stackId="1"
              dataKey="Total Real Property, Share"
              stroke="#28A939"
              fill="#28A939"
              strokeWidth={2}
            />
          )}
          {currentTypes.includes("Centrally Assessed") && (
            <Area
              type="linear"
              stackId="1"
              dataKey="Centrally Assessed, Share"
              stroke="#8b4aa8"
              fill="#8b4aa8"
              strokeWidth={2}
            />
          )}
          {currentTypes.includes("Personal Property") && (
            <Area
              type="linear"
              stackId="1"
              dataKey="Personal Property, Share"
              stroke="#bc9ddf"
              fill="#bc9ddf"
              strokeWidth={2}
            />
          )}
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
            domain={[0, 1]}
            tick={{ fontSize: 18 }}
            tickFormatter={(number) => `${number.toFixed(2) * 100}%`}
            label={{
              value: "Share",
              offset: -45,
              angle: -45,
              position: "top",
            }}
          />
          <Tooltip formatter={(number) => `${number.toFixed(2) * 100}%`} />
          <Legend align="center" verticalAlign="bottom" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
