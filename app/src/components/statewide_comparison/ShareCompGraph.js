import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export function ShareCompGraph({ currentData, currentYear }) {
  return (
    <div className="flex flex-col h-full w-full p-2 gap-2 bg-white place-self-end justify-center items-center rounded-xl shadow-xl">
      <div>Share of Tax Base by Property Type (%), {currentYear} </div>
      <ResponsiveContainer width="98%" height="95%">
        <BarChart data={currentData} layout="vertical">
          <CartesianGrid stroke="#eeeeee" />
          <XAxis
            type="number"
            domain={[0, 1]}
            ticks={[0, 0.2, 0.4, 0.6, 0.8, 1]}
            tickFormatter={(number) => `${number.toFixed(2) * 100}%`}
          />
          <YAxis
            dataKey="Entity Name"
            type="category"
            tick={{ fontSize: 12 }}
            interval={0}
            width={180}
          />
          <Tooltip formatter={(number) => `${number.toFixed(2) * 100}%`} />
          <Legend />
          <Bar
            dataKey="Primary Residential, Share"
            fill="#196b24"
            stackId="a"
          />
          <Bar
            dataKey="Non-primary Residential, Share"
            fill="#8ca890"
            stackId="a"
          />
          <Bar dataKey="Commercial, Share" fill="#5e5a52" stackId="a" />
          <Bar dataKey="Agricultural, Share" fill="#cccccc" stackId="a" />
          <Bar dataKey="Unimproved, Share" fill="#000000" stackId="a" />
          <Bar dataKey="Centrally Assessed, Share" fill="#8b4aa8" stackId="a" />
          <Bar dataKey="Personal Property, Share" fill="#bc9ddf" stackId="a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
