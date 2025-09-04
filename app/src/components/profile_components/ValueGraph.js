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

export function ValueGraph({ currentEntity, currentData, currentTypes }) {
  return (
    <div className="flex flex-col h-full w-full p-2 gap-2 bg-white place-self-end justify-center items-center rounded-xl shadow-xl">
      <div>Taxable Value (B): {currentEntity} </div>
      <ResponsiveContainer width="95%" height="95%">
        <LineChart data={currentData}>
          <CartesianGrid stroke="#eeeeee" />(
          {currentTypes.includes("Primary Residential") && (
            <Line
              type="linear"
              dataKey="Primary Residential"
              stroke="#196b24"
              strokeWidth={2}
            />
          )}
          ) (
          {currentTypes.includes("Non-primary Residential") && (
            <Line
              type="linear"
              dataKey="Non-primary Residential"
              stroke="#8ca890"
              strokeWidth={2}
            />
          )}
          ) (
          {currentTypes.includes("Commercial") && (
            <Line
              type="linear"
              dataKey="Commercial"
              stroke="#5e5a52"
              strokeWidth={2}
            />
          )}
          ) (
          {currentTypes.includes("Agricultural") && (
            <Line
              type="linear"
              dataKey="Agricultural"
              stroke="#cccccc"
              strokeWidth={2}
            />
          )}
          ) (
          {currentTypes.includes("Unimproved") && (
            <Line
              type="linear"
              dataKey="Unimproved"
              stroke="#000000"
              strokeWidth={2}
            />
          )}
          ) (
          {currentTypes.includes("Total Real Property") && (
            <Line
              type="linear"
              dataKey="Total Real Property"
              stroke="#28A939"
              strokeWidth={2}
            />
          )}
          ) (
          {currentTypes.includes("Centrally Assessed") && (
            <Line
              type="linear"
              dataKey="Centrally Assessed"
              stroke="#8b4aa8"
              strokeWidth={2}
            />
          )}
          ) (
          {currentTypes.includes("Personal Property") && (
            <Line
              type="linear"
              dataKey="Personal Property"
              stroke="#bc9ddf"
              strokeWidth={2}
            />
          )}
          )
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
            tickFormatter={(number) => `$${number.toFixed(1)}`}
          />
          <Tooltip formatter={(number) => `$${number.toFixed(2)} B`} />
          <Legend align="center" verticalAlign="bottom" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
