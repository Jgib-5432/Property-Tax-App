"use client";

import Link from "next/link";
import { Sandbox } from "@/components/analysis_components/Residential Exemption/Sandbox";

export function AnalysisResidExmptContent() {
  return (
    <div className="flex flex-col w-full p-4 items-center gap-8 text-center text-black">
      <div className="text-6xl italic mt-8">The Residential Exemption:</div>
      <div className="text-4xl italic">
        How does the exemption for residential property affect property taxes?
      </div>
      <Sandbox />
      <div className="grid w-8/10 bg-[#eeeeee] text-lg text-justify indent-8 p-8 gap-4 rounded-xl shadow-xl overflow-auto">
        <p className="text-2xl text-center">Introduction</p>
        <p>
          {" "}
          The state constitution allows the legislature to exempt a certain
          share of the value of primary residential property from taxation as
          perscribed in statute&nbsp;
          <Link href="https://le.utah.gov/xcode/ArticleXIII/Article_XIII,_Section_3.html?v=UC_AXIII_S3_2018050820190101">
            (XIII {"\u00A7"}3)
          </Link>
          . The maximum allowed is 45% and current statute sets the exemption at
          that value. But what would happen if the exemption were raised? and
          how much tax relief would that provide to homeowners?
        </p>
      </div>
      <div className="grid w-8/10 bg-[#eeeeee] text-lg text-justify indent-8 p-8 gap-4 rounded-xl shadow-xl overflow-auto">
        <p className="text-2xl text-center">Analysis</p>
        <p> Discussion of the methods and results</p>
        <p> </p>
      </div>
    </div>
  );
}
