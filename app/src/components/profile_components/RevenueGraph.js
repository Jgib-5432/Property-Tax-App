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

export function RevenueGraph({ currentEntity, currentData }) {
  return (
    <div className="flex flex-col h-full w-full p-2 gap-2 bg-white place-self-end justify-center items-center rounded-xl shadow-xl">
      <div>Total Revenue (M): {currentEntity} </div>
      <ResponsiveContainer width="95%" height="95%">
        <LineChart data={currentData}>
          <CartesianGrid stroke="#eeeeee" />
          <Line
            type="linear"
            dataKey="Revenue, Total"
            stroke="#196b24"
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
            dataKey="Revenue, Total"
            interval="preserveStart"
            domain={[0, (dataMax) => dataMax * 1.3]}
            tick={{ fontSize: 18 }}
            tickFormatter={(number) => `$${number.toFixed(0)}`}
          />
          <Tooltip formatter={(number) => `$${number.toFixed(2)} M`} />
          <Legend align="center" verticalAlign="bottom" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
