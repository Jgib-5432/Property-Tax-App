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

export function TaxRateGraph({ currentEntity, currentData }) {
  return (
    <div className="flex flex-col h-full w-full p-2 gap-2 bg-white place-self-end justify-center items-center rounded-xl shadow-xl">
      <div>Tax Rate & Revenue ($M): {currentEntity} </div>
      <ResponsiveContainer width="98%" height="95%">
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
            dataKey="Revenue, Total"
            stroke="#8b4aa8"
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
            yAxisId="left"
            interval="preserveStart"
            domain={[0, (dataMax) => dataMax * 1.3]}
            tick={{ fontSize: 18 }}
            tickFormatter={(number) => `${number.toFixed(2)}%`}
            label={{
              value: "Rate",
              offset: -45,
              angle: -45,
              position: "top",
            }}
            width={80}
          />
          <YAxis
            dataKey="Revenue, Total"
            yAxisId="right"
            orientation="right"
            interval="preserveStart"
            domain={[0, (dataMax) => dataMax * 1.3]}
            tick={{ fontSize: 18 }}
            tickFormatter={(value) =>
              new Intl.NumberFormat("en", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
              }).format(value)
            }
            label={{
              value: "Revenue",
              offset: -45,
              angle: 45,
              position: "top",
            }}
            width={80}
          />
          <Tooltip
            yAxisId="right"
            formatter={(number) => `${number.toFixed(2)}`}
          />{" "}
          <Legend align="center" verticalAlign="bottom" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
