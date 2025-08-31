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

export function ShareGraph({ currentEntity, currentData, currentTypes }) {
  return (
    <div className="flex flex-col h-full w-full p-2 gap-2 bg-white place-self-end justify-center items-center rounded-xl shadow-xl">
      <div>Share of Taxable Value (B): {currentEntity} </div>
      <ResponsiveContainer width="95%" height="95%">
        <LineChart data={currentData}>
          <CartesianGrid stroke="#eeeeee" />
          {currentTypes.includes("Primary Residential") && (
            <Line
              type="monotone"
              dataKey="Primary Residential, Share"
              stroke="#196b24"
              strokeWidth={2}
            />
          )}
          {currentTypes.includes("Non-primary Residential") && (
            <Line
              type="monotone"
              dataKey="Non-primary Residential, Share"
              stroke="#8b4aa8"
              strokeWidth={2}
            />
          )}
          {currentTypes.includes("Commercial") && (
            <Line
              type="monotone"
              dataKey="Commercial, Share"
              stroke="#767167"
              strokeWidth={2}
            />
          )}
          {currentTypes.includes("Agricultural") && (
            <Line
              type="monotone"
              dataKey="Agricultural, Share"
              stroke="#bcb4a5"
              strokeWidth={2}
            />
          )}
          {currentTypes.includes("Unimproved") && (
            <Line
              type="monotone"
              dataKey="Unimproved, Share"
              stroke="#2f2d29"
              strokeWidth={2}
            />
          )}
          {currentTypes.includes("Total Real Property") && (
            <Line
              type="monotone"
              dataKey="Total Real Property, Share"
              stroke="#28A939"
              strokeWidth={2}
            />
          )}
          {currentTypes.includes("Centrally Assessed") && (
            <Line
              type="monotone"
              dataKey="Centrally Assessed, Share"
              stroke="#171615"
              strokeWidth={2}
            />
          )}
          {currentTypes.includes("Personal Property") && (
            <Line
              type="monotone"
              dataKey="Personal Property, Share"
              stroke="#5e5a52"
              strokeWidth={2}
            />
          )}
          <XAxis
            dataKey="Tax Year"
            padding={{ left: 40 }}
            tick={{ fontSize: 18 }}
          />
          <YAxis
            interval="preserveStart"
            domain={[0, 1]}
            tick={{ fontSize: 18 }}
            tickFormatter={(number) => `${number.toFixed(2) * 100}%`}
          />
          <Tooltip formatter={(number) => `${number.toFixed(2) * 100}%`} />
          <Legend align="center" verticalAlign="bottom" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
