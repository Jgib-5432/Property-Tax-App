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

export function ValueCompGraph({ currentData, currentYear }) {
  return (
    <div className="flex flex-col h-full w-full p-2 gap-2 bg-white place-self-end justify-center items-center rounded-xl shadow-xl">
      <div>Total Tax Base by Property Type (B), {currentYear} </div>
      <ResponsiveContainer width="95%" height="95%">
        <BarChart data={currentData} layout="vertical">
          <CartesianGrid stroke="#eeeeee" />
          <XAxis
            type="number"
            tickFormatter={(number) => `${number.toFixed(0)}`}
          />
          <YAxis
            dataKey="Entity Name"
            type="category"
            tick={{ fontSize: 14 }}
            interval={0}
            width={90}
          />
          <Tooltip formatter={(number) => `$${number.toFixed(2)} B`} />
          <Legend />
          <Bar dataKey="Primary Residential" fill="#196b24" stackId="a" />
          <Bar dataKey="Non-primary Residential" fill="#8ca890" stackId="a" />
          <Bar dataKey="Commercial" fill="#5e5a52" stackId="a" />
          <Bar dataKey="Agricultural" fill="#cccccc" stackId="a" />
          <Bar dataKey="Unimproved" fill="#000000" stackId="a" />
          <Bar dataKey="Centrally Assessed" fill="#8b4aa8" stackId="a" />
          <Bar dataKey="Personal Property" fill="#bc9ddf" stackId="a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
