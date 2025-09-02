"use client";

import { Sandbox } from "@/components/analysis_components/To Truth or not to Truth.js/Sandbox";
import { TooeleCityRateChart } from "@/components/analysis_components/To Truth or not to Truth.js/TooeleCityRateChart";
import { TooeleCityRevenueChart } from "@/components/analysis_components/To Truth or not to Truth.js/TooeleCityRevenueChart";
import { CounterfactualRateChart } from "@/components/analysis_components/To Truth or not to Truth.js/CounterfactualRateChart";
import { CounterfactualRevenueChart } from "@/components/analysis_components/To Truth or not to Truth.js/CounterfactualRevenueChart";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export function AnalysisTruthinTaxContent() {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch("/text/analysis/Truth-in-Taxation_explain.md")
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, []);

  return (
    <div className="flex flex-col w-full p-4 items-center gap-8 text-center text-black">
      <div className="text-6xl italic mt-8">To Truth or Not to Truth:</div>
      <div className="text-4xl italic">
        How Truth in Taxation constrains Property Taxes
      </div>
      <div className="grid w-8/10 bg-[#eeeeee] text-lg text-justify indent-8 p-8 gap-4 rounded-xl shadow-xl overflow-auto">
        <p className="text-2xl text-center">Introduction</p>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>

      <div className="grid w-8/10 bg-[#eeeeee] text-lg text-justify indent-8 p-8 gap-4 rounded-xl shadow-xl overflow-auto">
        <p className="text-2xl text-center">Analysis</p>
        <p>
          High-minded tax theory is all well and good, but how do we know that
          the system is actually working? More importantly, how effective has it
          actually been at constraining the growth of property taxes? In order
          to answer these effectively, let&apos;s look to Tooele City as an
          example of how Truth in Taxation operates in practice. Below are a
          pair of charts comparing the tax rate the city applied relative to the
          total value of property it taxed and the revenue it collected.
        </p>
        <div className="flex flex-row gap-4">
          <TooeleCityRateChart />
          <TooeleCityRevenueChart />
        </div>
        <p>
          Notice in the graph on the left that the tax rate shown in green and
          the value shown in black move in opposite directions with the
          exception of 2018-2019. This is Truth in Taxation in action. As the
          total value of property within Tooele City has grown over the past
          decade, the tax rate has fallen in response. Taxing entities retain
          the power to raise their property taxes however, which is what
          happened here in 2018 and explains the spike in the tax rate between
          2018 and 2019. Even so, the very next year, the applied rate began to
          decline again given the trend of growth in the tax base.
        </p>
        <p>
          Taking the rate and the base together produces the revenue shown in
          green on the right chart. The notable features here are the two
          plateaus of stability on either side of the tax hike in 2018. Revenues
          were effectively flat between 2014 and 2018 at just under $3 million.
          Following the tax increase, revenues were flat at a little under $6
          million between 2019 and 2022. In an ideal case, this is exactly how
          Truth in Taxation is supposed to work.
        </p>
        <p>
          Of course, this does not explain the uptick in collections seen after
          2022. The reason for this increase hints at the true underlying
          complexity of administering Truth in Taxation. Specifically, there are
          many sources of variation that influence the rate calculations and can
          result in year-to-year fluctuations, or trends year-over-year. These
          include accounting for new growth, the valuation of personal property,
          updates to assessed values, changes to central assessment and
          apportionment, and taxpayer appealing valuations just to name a few.
          Fortunately, since these complexities all have the net effect of
          slowing the descent of the tax rate in response to value appreciation,
          we can hold them aside for the purpose of this analysis.
        </p>
        <p>
          Now that we have seen how Truth in Taxation works qualitatively,
          let&apos;s turn to estimating how effective it has been at
          constraining property taxes. In order to do that, we need to determine
          what tax rates would have been if it were not in place to drive them
          down. Constructing this counterfactual scenario is conceptually
          simple. By carrying forward the existing tax rate (and adjusting it up
          when an increase occurs), we can model what rates would have been in
          the absence of Truth and Taxation. After all, if we assume that taxing
          entities would not have lowered their rates voluntarily, then the only
          mechanism to decrease them is Truth in Taxation. Computing that
          counterfactual yields the scenario shown in the charts below.
        </p>
        <div className="flex flex-row gap-4">
          <CounterfactualRateChart />
          <CounterfactualRevenueChart />
        </div>
        <p>
          In the left chart, the purple line shows the counterfactual rate of
          .25% from 2014 until the city raised taxes to .33% in 2018, whereafter
          the rate remains at the higher value for the remainder of the
          timeframe. By contrast, under Truth in Taxation, the rates got as low
          as .19% in 2018 and .24% in 2023. The difference between the rates
          themselves is one way to measure the effectiveness of Truth in
          Taxation. For Tooele City in particular, the tax rate in 2024 is about
          two-thirds as high as it would have been without Truth in Taxation.
          However, a better measure of effectiveness would be directly comparing
          the difference in aggregate tax liability experienced by taxpayers.
          For that, we can look to the chart on the right. It depicts the base
          revenue collected by the city shown by the green line compared to what
          the city would have collected if the rate had not been lowered in
          purple. Note that this assumes the growth trends in the underlying tax
          base are independent of the rate.
        </p>
        <p>
          The difference between the base revenue and the counterfactual revenue
          is shown by the black line. Since this difference is the benefit
          derived from Truth in Taxation, we can call this value for any given
          year the &apos;Truth Dividend&apos;. In essence, it measures how much
          savings are accrued to taxpayers over time due to the ratcheting down
          of tax rates. It would be equally accurate to describe this value as
          the revenue forgone to the taxing entity due to Truth in Taxation. In
          the case of Tooele City, residents are estimated to have paid $3.3
          million less in 2024 property taxes than they would have otherwise
          relative to the 2014 baseline. In other words, Tooele City taxpayers
          received a Truth Dividend in the amount of $3.3 million in 2024
          (relative to the 2014 baseline).
        </p>
        <p>
          Naturally, fortunes vary by which taxing entity happens to be at
          issue. The magnitude of the dividend experienced by taxpayers will
          depend on which entities they are taxed by, whether and by how much
          those entities have chosen to raise their revenue, the underlying
          dynamics of the particular tax base in question, among other factors.
          To explore how the Truth Dividend varies, see the sandbox at the
          bottom of this page which outputs this analysis for any tax entity one
          might select.
        </p>
        <p>
          In order to assess how effective Truth in Taxation has been statewide,
          we can add up the Truth Dividend for each taxing entity across the
          state. By adding up all the entities in this way, we can estimate the
          aggregate difference between existing tax liability and where
          liability would be without Truth in Taxation. When we compute that
          value, we discover that relative to the base year of 2014, total tax
          liability would be $2.3 billion higher today but for Truth in
          Taxation. To put that value in context, in fiscal year 2024, the
          state&apos;s entire higher education budget was roughly $3 billion.
        </p>
      </div>

      <div className="text-4xl mt-8">Sandbox </div>
      <Sandbox />
    </div>
  );
}
