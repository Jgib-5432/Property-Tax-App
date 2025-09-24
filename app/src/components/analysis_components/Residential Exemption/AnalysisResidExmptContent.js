"use client";

import Link from "next/link";
import { Sandbox } from "@/components/analysis_components/Residential Exemption/Sandbox";
import { TaxBaseChart } from "@/components/analysis_components/Residential Exemption/TaxBaseChart";
import { TotalTaxBaseChart } from "@/components/analysis_components/Residential Exemption/TotalTaxBaseChart";
import { TaxRateChart } from "@/components/analysis_components/Residential Exemption/TaxRateChart";
import { TotalTaxRevenueChart } from "@/components/analysis_components/Residential Exemption/TotalTaxRevenueChart";
import { TaxShareChart } from "@/components/analysis_components/Residential Exemption/TaxShareChart";
import { TaxLiabilityChart } from "@/components/analysis_components/Residential Exemption/TaxLiabilityChart";

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
          percent of primary residential property from taxation as prescribed in
          statute&nbsp;
          <Link href="https://le.utah.gov/xcode/ArticleXIII/Article_XIII,_Section_3.html?v=UC_AXIII_S3_2018050820190101">
            (XIII {"\u00A7"}3)
          </Link>
          . The maximum allowed is 45% and current statute sets the exemption at
          that value&nbsp;
          <Link href="https://le.utah.gov/xcode/Title59/Chapter2/59-2-S103.html?v=C59-2-S103_2025070120250507">
            (59-2-103)
          </Link>
          . In practice, this means that primary residential property owners are
          taxed on 55% of the market value of their homes. For example, if one
          owned a home worth $500,000, then the taxable value of that home is
          $275,000. With a hypothetical total tax rate of .0001%, this implies a
          total annual tax liability of $2,750. Naturally, the actual values and
          liabilities will differ by location as values and tax rates vary.
        </p>
        <p>
          If one wished to reduce the tax burden on homeowners, increasing the
          primary residential exemption is among the options available. However,
          this change would not just affect homeowners but instead would flow
          through the system and change the liability for all types of taxable
          property. This is because the residential exemption directly changes
          the tax base. And since Truth in Taxation balances entity revenue in
          total, altering the tax base of one type of property rebalances the
          share of liability faced by all types of property. This analysis aims
          at estimating how this rebalancing would affect both taxing entities
          and taxpayers for a residential exemption of 55%. The sandbox above
          recreates the analysis described below and allows one to examine any
          arbitrary subset of taxing entity types, counties, and taxable
          property types. Additionally, one can select alternative values for
          the residential exemption.
        </p>
      </div>
      <div className="grid w-8/10 bg-[#eeeeee] text-lg text-justify indent-8 p-8 gap-4 rounded-xl shadow-xl overflow-auto">
        <p className="text-2xl text-center">Analysis</p>
        <p>
          {" "}
          The first step in estimating the impact of changing the residential
          exemption from 45% to 55% is understanding how such a change would
          flow through the system. The first thing a change in the exemption
          would affect is the taxable value of primary residential property. In
          effect, raising the exemption would remove a chunk of property from
          the tax base. The chart below shows this effect for Morgan, Carbon,
          and Grand counties.
        </p>
        <TaxBaseChart />
        <p>
          The dark green bar shows the total value of primary residential
          taxable property in the 2024 tax year. These values are the result of
          taking the 45% exemption out of the total fair market value of the
          underlying property. By contrast, the light green bars show the value
          of the same property if the residential exemption were instead set to
          55%. Notice that in each county, the taxable value is strictly smaller
          under the 55% exemption. For example, in Carbon county, primary
          residential property had a total taxable value of $1.01 B for the 45%
          exemption whereas that same value goes down to $0.83 B under a 55%
          exemption, yielding a difference of $180 M. This makes sense given
          that the higher exemption excludes a larger share of the property
          value from being taxable. Notice further that the difference between
          the bars is larger for Morgan county than it is for Grand county. This
          is because increasing the exemption causes the taxable property to
          shrink by a fixed percentage. This means that the larger the fair
          market value, the larger will be the reduction (in nominal terms) when
          the exemption changes. In other words, the shrinking effect is larger
          for larger tax bases.
        </p>
        <p>
          Since changing the residential exemption directly changes the value of
          residential taxable property, it does not impact the taxable value of
          the other types of taxable property. This is demonstrated in the chart
          below which expands on the first chart.
        </p>
        <TotalTaxBaseChart />
        <p>
          Here each colored section represents a different type of taxable
          property. As shown in the lighter bars, every type of taxable property
          except primary residential property has the same value in both the 45%
          and 55% scenarios. This can been seen in both the tooltip and in the
          fact that each colored section is the same size in both bars. Despite
          this, the overall value of the tax base is smaller in the 55%
          scenario. This is because of the reduction in the taxable value of
          primary residential property.
        </p>
        <p>
          One characteristic behavior of the Utah property tax system is that,
          due to Truth in Taxation, rates respond to changes in the value of the
          tax base to keep revenue constant year-over-year. Usually, this means
          reducing the rate as the base increases in value. However, the
          certified rate calculation works both ways. As a result, reducing the
          value of the total tax base by increasing the residential exemption
          triggers an increase in the tax rate to maintain revenues for taxing
          entities. The pair of charts below show the impact to the tax rate and
          total revenue.
        </p>
        <div className="flex flex-row gap-2">
          <TaxRateChart />
          <TotalTaxRevenueChart />
        </div>
        <p>
          On net, the change in the tax rate needed to maintain revenues taken
          with the smaller total value of residential property rebalances the
          total liability away from residential property and onto all other
          types of taxable property. As a result, homeowners would receive a tax
          break whose size depends on the underlying mix of property in the tax
          base, the value of their property, and the specific entities which
          levy property taxes on it, among other factors. Conversely, all other
          property taxpayers would see their liability increase since the only
          change they experience is a higher tax rate. Effectively, the tax
          burden shifts to some degree off of homeowners and onto other types of
          property owners. And while the exact degree of shift will vary widely
          across the state, we can measure it in two ways: aggregate shares, and
          individual liability. The aggregate shares approach compares the
          composition of the tax base before and after the change in the
          residential exemption. See the chart below.
        </p>
        <TaxShareChart />
        <p>
          The rebalancing between tax types can be seen here in the size
          difference of the colored segments between the darker and lighter
          bars. For example, in Morgan county primary residential property makes
          up 61% of the total tax base. However, after the exemption is
          increased, that share goes down to 56%. In this way, there is a shift
          of 5 percentage points off of residential and onto other types of
          property. By contrast, that same comparison in Grand county is a 4
          percentage point shift. The degree of the shift measured this way
          depends on the starting share of primary residential property. The
          larger the starting share, the larger the shift. This provides a broad
          measure of how aggregate tax liability would shift by tax entity in
          response to a change in the residential exemption.
        </p>
        <p>
          The individual liability approach by contrast, measures how a
          hypothetical individual's tax liability might change. To estimate
          this, take a piece of property with a fair market value of $500,000.
          The tax liability on this piece of property will depend on what type
          of property it is and the tax rate. The chart below shows how the
          liability on this property would vary by these factors.
        </p>
        <TaxLiabilityChart />
        <p>
          The green bars show the tax liability on a primary residential
          property with the 45% exemption in the darker bar, and the 55%
          exemption in the lighter bar. The purple bars show the same
          relationship for all other types of taxable property. The residential
          property is approximately half the value of the other types of
          property in each of the example counties shown here because these
          values are calculated from a hypothetical starting value of $500,000
          regardless of property type. Consequently, the residential exemption
          cuts the value nearly in half before the tax rate is applied but only
          for the residential property.
        </p>
        <p>
          The measure of interest for all types of property is the difference
          between the dark and light bars. That difference is the estimate of
          how tax liability changes in response to the residential exemption
          increasing. These differences account for both the change in the tax
          base as well as the tax rate and so represent the net impact of the
          policy change. In Grand county for example, a $500,000 home would
          receive a tax break of about $86, while a $500,000 piece of other
          property would see their liability increase by $48. It should be noted
          that these values only account for the taxes levied by the county
          itself and do not include other entities such as school districts or
          municipalities. To find the total change in liability experienced by a
          given taxpayer, one would need to sum the differences in liability for
          each taxing entity collecting revenue from the taxpayer.
        </p>
        <p>
          In sum, both the aggregate shares and the individual liability
          approaches give insight into the extent to which a change in the
          residential exemption would be felt by taxpayers and how the impact of
          that change varies among taxing entities. Since the experience of an
          individual taxpayer is highly dependent on the specific contours of
          their circumstances, it is difficult to predict in a generalized way
          the precise extent to which any given individual will benefit or lose
          out from a change in the residential exemption. However, it is
          certainly the case that homeowners would experience a tax break if the
          residential exemption were increased. By the same token, all other
          property owners would experience a tax increase. As a result, the
          optimum value for the residential exemption is fundamentally a
          trade-off. The sandbox at this top of this page aims to provide as
          much insight as possible into the statewide implications of changing
          the exemption.
        </p>
      </div>
    </div>
  );
}
