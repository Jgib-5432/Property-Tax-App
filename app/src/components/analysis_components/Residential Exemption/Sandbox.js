"use client";

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
import entityData from "../../../../public/data/exemption_data.json";
import Select from "react-select";
import countiesList from "../../../../public/data/counties_list.json";
import yearsList from "../../../../public/data/years_list.json";
import entityTypesList from "../../../../public/data/entity_types_list.json";
import propertyTypes from "../../../../public/data/property_types_list.json";
import { useState } from "react";

export function Sandbox() {
  const exemptionValues = [];
  for (let i = 0; i <= 100; i += 5) {
    exemptionValues.push(i);
  }

  const exemptionOptions = exemptionValues.map((num) => ({
    value: num,
    label: num.toString(),
  }));

  const counties = countiesList.map((a) => a.value);
  const propertyOptions = propertyTypes;

  const [currentEntTypes, setCurrentEntType] = useState(["County"]);
  const [currentTypes, setCurrentTypes] = useState([
    "Primary Residential",
    "Commercial",
    "Centrally Assessed",
  ]);
  const [currentCounties, setCurrentCounties] = useState(counties);
  const [currentYear, setCurrentYear] = useState(2024);
  const [currentExemptValue, setCurrentValue] = useState(55);

  const changeEntType = (selectedEntTypes) => {
    setCurrentEntType(selectedEntTypes.map((type) => type.value));
  };

  const changeCounties = (selectedCounties) => {
    setCurrentCounties(selectedCounties.map((type) => type.value));
  };

  const changeYear = (selectedOption) => {
    setCurrentYear(selectedOption.value);
  };

  const changeTypes = (selectedTypes) => {
    setCurrentTypes(selectedTypes.map((type) => type.value));
  };

  const changeExemptValue = (selectedOption) => {
    setCurrentValue(selectedOption.value);
  };

  const sortedData = entityData.sort(
    (a, b) => b["Primary Residential, Share"] - a["Primary Residential, Share"]
  );

  const currentData = sortedData.filter(
    (item) =>
      currentEntTypes.includes(item["Entity Type"]) &&
      item["Tax Year"] === currentYear &&
      currentCounties.includes(item["County Name"])
  );

  return (
    <div className="flex flex-row w-full grow bg-[#eeeeee] text-black m-4 p-4 gap-4 rounded-xl shadow-xl">
      <div className="flex flex-col w-1/7 h-[90vh] bg-[#bcb4a5] justify-center text-[#196b24] p-4 gap-3 rounded-xl shadow-xl overflow-visible items-center sticky top-16">
        <div className="text-2xl font-bold my-4">Control Panel</div>
        <div className="font-bold"> County</div>
        <Select isMulti options={countiesList} onChange={changeCounties} />
        <div className="font-bold"> Taxing Entity Type</div>
        <Select isMulti options={entityTypesList} onChange={changeEntType} />
        <div className="font-bold"> Property Types</div>
        <Select options={propertyOptions} isMulti onChange={changeTypes} />
        <div className="font-bold"> Tax Year</div>
        <Select options={yearsList} onChange={changeYear} />

        <div className="font-bold"> Residential Exemption</div>
        <Select options={exemptionOptions} onChange={changeExemptValue} />

        <div className="flex flex-col p-4 mt-auto">
          *Rounding and floating point errors may produce artifacts in tooltip
          values.
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full h-[320vh]">
        <div className="flex flex-col grow bg-white text-black p-4 gap-2 rounded-xl shadow-xl overflow-auto">
          <div className="text-center text-2xl">
            {" "}
            Observed vs Counterfactual Taxable Value (B)
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
                width={170}
              />
              <Tooltip formatter={(number) => `$${number.toFixed(2)} B`} />(
              {currentTypes.includes("Primary Residential") && (
                <Bar dataKey="Primary Residential" fill="#196b24" stackId="a" />
              )}
              ) (
              {currentTypes.includes("Non-primary Residential") && (
                <Bar
                  dataKey="Non-primary Residential"
                  fill="#8ca890"
                  stackId="a"
                />
              )}
              ) (
              {currentTypes.includes("Commercial") && (
                <Bar dataKey="Commercial" fill="#5e5a52" stackId="a" />
              )}
              ) (
              {currentTypes.includes("Agricultural") && (
                <Bar dataKey="Agricultural" fill="#cccccc" stackId="a" />
              )}
              ) (
              {currentTypes.includes("Unimproved") && (
                <Bar dataKey="Unimproved" fill="#000000" stackId="a" />
              )}
              ) (
              {currentTypes.includes("Centrally Assessed") && (
                <Bar dataKey="Centrally Assessed" fill="#8b4aa8" stackId="a" />
              )}
              ) (
              {currentTypes.includes("Personal Property") && (
                <Bar dataKey="Personal Property" fill="#bc9ddf" stackId="a" />
              )}
              ) (
              {currentTypes.includes("Primary Residential") && (
                <Bar
                  dataKey="Counterfactual Primary Residential"
                  fill="#196b2470"
                  stackId="b"
                />
              )}
              )
              {currentTypes.includes("Non-primary Residential") && (
                <Bar
                  dataKey="Non-primary Residential"
                  fill="#8ca89080"
                  stackId="b"
                />
              )}
              ) (
              {currentTypes.includes("Commercial") && (
                <Bar dataKey="Commercial" fill="#5e5a5280" stackId="b" />
              )}
              ) (
              {currentTypes.includes("Agricultural") && (
                <Bar dataKey="Agricultural" fill="#cccccc80" stackId="b" />
              )}
              ) (
              {currentTypes.includes("Unimproved") && (
                <Bar dataKey="Unimproved" fill="#00000080" stackId="b" />
              )}
              ) (
              {currentTypes.includes("Centrally Assessed") && (
                <Bar
                  dataKey="Centrally Assessed"
                  fill="#8b4aa880"
                  stackId="b"
                />
              )}
              ) (
              {currentTypes.includes("Personal Property") && (
                <Bar dataKey="Personal Property" fill="#bc9ddf80" stackId="b" />
              )}
              )
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col grow bg-white text-black p-4 gap-2 rounded-xl shadow-xl overflow-auto">
          <div className="text-center text-2xl">
            {" "}
            Observed vs Counterfactual Tax Rates (%)
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
                width={170}
              />
              <Tooltip formatter={(number) => `${number.toFixed(2)} %`} />(
              <Bar dataKey="Tax Rate" fill="#196b24" />
              <Bar dataKey="Counterfactual Tax Rate" fill="#8ca890" />)
            </BarChart>
          </ResponsiveContainer>{" "}
        </div>

        <div className="flex flex-col grow bg-white text-black p-4 gap-2 rounded-xl shadow-xl overflow-auto">
          <div className="text-center text-2xl">
            {" "}
            Observed vs Counterfactual Revenue (M)
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
                width={170}
              />
              <Tooltip formatter={(number) => `$${number.toFixed(2)} M`} />(
              {currentTypes.includes("Primary Residential") && (
                <Bar
                  dataKey="Revenue, Primary Residential"
                  fill="#196b24"
                  stackId="a"
                />
              )}
              ) (
              {currentTypes.includes("Non-primary Residential") && (
                <Bar
                  dataKey="Revenue, Non-primary Residential"
                  fill="#8ca890"
                  stackId="a"
                />
              )}
              ) (
              {currentTypes.includes("Commercial") && (
                <Bar dataKey="Revenue, Commercial" fill="#5e5a52" stackId="a" />
              )}
              ) (
              {currentTypes.includes("Agricultural") && (
                <Bar
                  dataKey="Revenue, Agricultural"
                  fill="#cccccc"
                  stackId="a"
                />
              )}
              ) (
              {currentTypes.includes("Unimproved") && (
                <Bar dataKey="Revenue, Unimproved" fill="#000000" stackId="a" />
              )}
              ) (
              {currentTypes.includes("Centrally Assessed") && (
                <Bar
                  dataKey="Revenue, Centrally Assessed"
                  fill="#8b4aa8"
                  stackId="a"
                />
              )}
              ) (
              {currentTypes.includes("Personal Property") && (
                <Bar
                  dataKey="Revenue, Personal Property"
                  fill="#bc9ddf"
                  stackId="a"
                />
              )}
              ) (
              {currentTypes.includes("Primary Residential") && (
                <Bar
                  dataKey="Counterfactual Revenue, Primary Residential"
                  fill="#196b2470"
                  stackId="b"
                />
              )}
              )
              {currentTypes.includes("Non-primary Residential") && (
                <Bar
                  dataKey="Counterfactual Revenue, Non-primary Residential"
                  fill="#8ca89080"
                  stackId="b"
                />
              )}
              ) (
              {currentTypes.includes("Commercial") && (
                <Bar
                  dataKey="Counterfactual Revenue, Commercial"
                  fill="#5e5a5280"
                  stackId="b"
                />
              )}
              ) (
              {currentTypes.includes("Agricultural") && (
                <Bar
                  dataKey="Counterfactual Revenue, Agricultural"
                  fill="#cccccc80"
                  stackId="b"
                />
              )}
              ) (
              {currentTypes.includes("Unimproved") && (
                <Bar
                  dataKey="Counterfactual Revenue, Unimproved"
                  fill="#00000080"
                  stackId="b"
                />
              )}
              ) (
              {currentTypes.includes("Centrally Assessed") && (
                <Bar
                  dataKey="Counterfactual Revenue, Centrally Assessed"
                  fill="#8b4aa880"
                  stackId="b"
                />
              )}
              ) (
              {currentTypes.includes("Personal Property") && (
                <Bar
                  dataKey="Counterfactual Revenue, Personal Property"
                  fill="#bc9ddf80"
                  stackId="b"
                />
              )}
              )
            </BarChart>
          </ResponsiveContainer>{" "}
        </div>

        <div className="flex flex-col grow bg-white text-black p-4 gap-2 rounded-xl shadow-xl overflow-auto">
          <div className="text-center text-2xl">
            {" "}
            Observed vs Counterfactual Share (%)
          </div>
          <ResponsiveContainer width="100%" height="95%">
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
                width={170}
              />
              <Tooltip formatter={(number) => `${number.toFixed(2) * 100}%`} />(
              {currentTypes.includes("Primary Residential") && (
                <Bar
                  dataKey="Primary Residential, Share"
                  fill="#196b24"
                  stackId="a"
                />
              )}
              ) (
              {currentTypes.includes("Non-primary Residential") && (
                <Bar
                  dataKey="Non-primary Residential, Share"
                  fill="#8ca890"
                  stackId="a"
                />
              )}
              ) (
              {currentTypes.includes("Commercial") && (
                <Bar dataKey="Commercial, Share" fill="#5e5a52" stackId="a" />
              )}
              ) (
              {currentTypes.includes("Agricultural") && (
                <Bar dataKey="Agricultural, Share" fill="#cccccc" stackId="a" />
              )}
              ) (
              {currentTypes.includes("Unimproved") && (
                <Bar dataKey="Unimproved, Share" fill="#000000" stackId="a" />
              )}
              ) (
              {currentTypes.includes("Centrally Assessed") && (
                <Bar
                  dataKey="Centrally Assessed, Share"
                  fill="#8b4aa8"
                  stackId="a"
                />
              )}
              ) (
              {currentTypes.includes("Personal Property") && (
                <Bar
                  dataKey="Personal Property, Share"
                  fill="#bc9ddf"
                  stackId="a"
                />
              )}
              ) (
              {currentTypes.includes("Primary Residential") && (
                <Bar
                  dataKey="Counterfactual Primary Residential, Share"
                  fill="#196b2470"
                  stackId="b"
                />
              )}
              )
              {currentTypes.includes("Non-primary Residential") && (
                <Bar
                  dataKey="Counterfactual Non-primary Residential, Share"
                  fill="#8ca89080"
                  stackId="b"
                />
              )}
              ) (
              {currentTypes.includes("Commercial") && (
                <Bar
                  dataKey="Counterfactual Commercial, Share"
                  fill="#5e5a5280"
                  stackId="b"
                />
              )}
              ) (
              {currentTypes.includes("Agricultural") && (
                <Bar
                  dataKey="Counterfactual Agricultural, Share"
                  fill="#cccccc80"
                  stackId="b"
                />
              )}
              ) (
              {currentTypes.includes("Unimproved") && (
                <Bar
                  dataKey="Counterfactual Unimproved, Share"
                  fill="#00000080"
                  stackId="b"
                />
              )}
              ) (
              {currentTypes.includes("Centrally Assessed") && (
                <Bar
                  dataKey="Counterfactual Centrally Assessed, Share"
                  fill="#8b4aa880"
                  stackId="b"
                />
              )}
              ) (
              {currentTypes.includes("Personal Property") && (
                <Bar
                  dataKey="Counterfactual Personal Property, Share"
                  fill="#bc9ddf80"
                  stackId="b"
                />
              )}
              )
            </BarChart>
          </ResponsiveContainer>{" "}
        </div>
      </div>

      <div className="flex flex-col w-1/6 h-[320vh] gap-2 items-center">
        <div className="flex w-full h-1/4 overflow-visible">
          <div className="flex flex-col w-full h-6/10 bg-white p-4 rounded-xl shadow-xl justify-center sticky top-16">
            <p className="p-2 indent-4 text-center overflow-auto">
              This chart show how total taxable value would change by entity if
              the residential exemption were set at another value. Increasing
              the exemption has the effect of shrinking the aggregate value of
              primary residential property and so the counterfactual tax base
              (shown here in the lighter bars), will be strictly smaller than
              the observed tax base.
            </p>
          </div>
        </div>

        <div className="flex w-full h-1/4 overflow-visible">
          <div className="flex flex-col w-full h-6/10 bg-white p-4 rounded-xl shadow-xl justify-center sticky top-16">
            <p className="p-2 indent-4 text-center overflow-auto">
              This chart shows how applied tax rates would change in response to
              a change in the residential exemption. Since Truth in Taxation
              enforces flat revenues and an increase in the residential
              exemption would shrink the tax base, applied tax rates would
              increase to maintain revenues, all else equal. As such, the
              counterfactual tax rates shown in the lighter bars are strictly
              higher than the observed values.
            </p>
          </div>
        </div>

        <div className="flex w-full h-1/4 overflow-visible">
          <div className="flex flex-col w-full h-6/10 bg-white p-4 rounded-xl shadow-xl justify-center sticky top-16">
            <p className="p-2 indent-4 text-center overflow-auto">
              This chart shows total revenue tax entites collect by property
              type, and how that revenue changes if the residential exemption
              were different. The values here are the result of two opposing
              factors: the decrease in taxable resedential property and the
              increase in the tax rate triggered to keep the entity whole. As
              such, the total revenue does not change, but the amount drawn from
              each property type does.
            </p>
          </div>
        </div>

        <div className="flex w-full h-1/4 overflow-visible">
          <div className="flex flex-col w-full h-6/10 bg-white p-4 rounded-xl shadow-xl justify-center sticky top-16">
            <p className="p-2 indent-4 text-center overflow-auto">
              This chart shows how the property type shares of entity tax bases
              would shift if the residential exemption were altered. Since
              increasing the exemption reduces the total value of primary
              residential property, it would increase the share of the tax base
              borne by all other types of taxable property. The counterfactual
              is shown here is the lighter bars.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
