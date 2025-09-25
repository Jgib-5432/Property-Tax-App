import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";

import entityData from "../../../../public/data/exemption_data.json";

export function TotalTaxBaseChart() {
  const selectedCounties = ["Morgan", "Carbon", "Grand"];

  const currentData = entityData.filter(
    (item) =>
      item["Tax Year"] === 2024 &&
      selectedCounties.includes(item["Entity Name"])
  );

  return (
    <div className="flex flex-col h-96 w-5/10 bg-white text-black p-4 gap-2 rounded-xl shadow-xl justify-self-center">
      <div className="text-center text-xl">
        {" "}
        Observed vs Counterfactual Tax Base ($B): Morgan, Carbon, & Grand
        Counties
      </div>
      <ResponsiveContainer width="100%" height="95%">
        <BarChart data={currentData} layout="vertical">
          <CartesianGrid stroke="#eeeeee" />
          <XAxis type="number" />
          <YAxis
            dataKey="Entity Name"
            type="category"
            tick={{ fontSize: 12 }}
            interval={0}
          />
          <Tooltip formatter={(number) => `$${number.toFixed(2)} B`} />(
          <Bar dataKey="Primary Residential" fill="#196b24" stackId="a" />
          <Bar dataKey="Non-primary Residential" fill="#8ca890" stackId="a" />
          <Bar dataKey="Commercial" fill="#5e5a52" stackId="a" />
          <Bar dataKey="Agricultural" fill="#cccccc" stackId="a" />
          <Bar dataKey="Unimproved" fill="#000000" stackId="a" />
          <Bar dataKey="Centrally Assessed" fill="#8b4aa8" stackId="a" />
          <Bar dataKey="Personal Property" fill="#bc9ddf" stackId="a" />
          <Bar
            dataKey="Counterfactual Primary Residential"
            fill="#196b2470"
            stackId="b"
          />
          <Bar dataKey="Non-primary Residential" fill="#8ca89080" stackId="b" />
          <Bar dataKey="Commercial" fill="#5e5a5280" stackId="b" />
          <Bar dataKey="Agricultural" fill="#cccccc80" stackId="b" />
          <Bar dataKey="Unimproved" fill="#00000080" stackId="b" />
          <Bar dataKey="Centrally Assessed" fill="#8b4aa880" stackId="b" />
          <Bar dataKey="Personal Property" fill="#bc9ddf80" stackId="b" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

/*

          <Bar dataKey="Non-primary Residential" fill="#8ca890" stackId="a" />
          <Bar dataKey="Commercial" fill="#5e5a52" stackId="a" />
          <Bar dataKey="Agricultural" fill="#cccccc" stackId="a" />
          <Bar dataKey="Unimproved" fill="#000000" stackId="a" />
          <Bar dataKey="Centrally Assessed" fill="#8b4aa8" stackId="a" />
          <Bar dataKey="Personal Property" fill="#bc9ddf" stackId="a" />

          <Bar dataKey="Commercial" fill="#5e5a5280" stackId="b" />
          <Bar dataKey="Agricultural" fill="#cccccc80" stackId="b" />
          <Bar dataKey="Unimproved" fill="#00000080" stackId="b" />
          <Bar dataKey="Centrally Assessed" fill="#8b4aa880" stackId="b" />
          <Bar dataKey="Personal Property" fill="#bc9ddf80" stackId="b" />
          <Bar dataKey="Non-primary Residential" fill="#8ca89080" stackId="b" />


*/
