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
import entityData from "../../../../public/data/counterfactual_data.json";
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

  return (
    <div className="flex flex-row w-full grow bg-[#eeeeee] text-black m-4 p-4 gap-4 rounded-xl shadow-xl">
      <div className="flex flex-col w-1/7 h-1/3 bg-[#bcb4a5] justify-center text-[#196b24] p-4 gap-3 rounded-xl shadow-xl overflow-visible items-center sticky top-24">
        <div className="text-2xl font-bold my-4">Control Panel</div>
        <div className="font-bold"> Taxing Entity Type</div>
        <Select isMulti options={entityTypesList} onChange={changeEntType} />
        <div className="font-bold"> County</div>
        <Select isMulti options={countiesList} onChange={changeCounties} />
        <div className="font-bold"> Property Types</div>
        <Select options={propertyOptions} isMulti onChange={changeTypes} />
        <div className="font-bold"> Tax Year</div>
        <Select options={yearsList} onChange={changeYear} />

        <div className="font-bold"> Residential Exemption</div>
        <Select options={exemptionOptions} onChange={changeExemptValue} />

        <div className="flex flex-col p-4 mt-auto sticky bottom-0">
          *Rounding and floating point errors may produce artifacts in tooltip
          values.
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full h-[225vh]">
        <div className="flex flex-col grow bg-white text-black p-4 gap-2 rounded-xl shadow-xl overflow-auto">
          <div className="text-center text-2xl">
            {" "}
            Observed vs Counterfactual Taxable Value (B)
          </div>
          <ResponsiveContainer width="100%" height="95%"></ResponsiveContainer>
        </div>

        <div className="flex flex-col grow bg-white text-black p-4 gap-2 rounded-xl shadow-xl overflow-auto">
          <div className="text-center text-2xl">
            {" "}
            Observed vs Counterfactual Share (%)
          </div>
          <ResponsiveContainer width="100%" height="95%"></ResponsiveContainer>
        </div>

        <div className="flex flex-col grow bg-white text-black p-4 gap-2 rounded-xl shadow-xl overflow-auto">
          <div className="text-center text-2xl">
            {" "}
            Observed vs Counterfactual Revenue (M)
          </div>
          <ResponsiveContainer width="100%" height="95%"></ResponsiveContainer>
        </div>
      </div>

      <div className="flex flex-col w-1/6 h-[225vh] gap-2 justify-between items-center">
        <div className="flex flex-col w-full  bg-white p-4 rounded-xl shadow-xl justify-center">
          <p className="p-2 indent-4 text-center overflow-auto">
            This chart show how total taxable value would change by entity if
            the residential exemption were set at another value. Increasing the
            exemption has the effect of shrinking the aggregate value of primary
            residential property and so the counterfactual tax base (shown here
            in the lighter bars), will be strictly smaller than the observed tax
            base.
          </p>
        </div>

        <div className="flex flex-col w-full bg-white p-4 rounded-xl shadow-xl justify-center">
          <p className="p-2 indent-4 text-center overflow-auto">
            This chart shows how the property type shares of entity tax bases
            would shift if the residential exemption were altered. Since
            increasing the exemption reduces the total value of primary
            residential property, it would increase the share of the tax base
            borne by all other types of taxable property. The counterfactual is
            shown here is the lighter bars.
          </p>
        </div>

        <div className="flex flex-col w-full bg-white p-4 rounded-xl shadow-xl justify-center">
          <p className="p-2 indent-4 text-center overflow-auto">
            This chart shows total revenue tax entites collect by property type,
            and how that revenue changes if the residential exemption were
            different. The values here are the result of two opposing factors:
            the decrease in taxable resedential property and the increase in the
            tax rate triggered to keep the entity whole. As such, the total
            revenue does not change, but the amount drawn from each property
            type does.
          </p>
        </div>
      </div>
    </div>
  );
}
