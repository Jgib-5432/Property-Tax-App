import { AnalysisTemplateCard } from "@/components/analysis_components/AnalysisTemplateCard";

export function AnalysisContent() {
  return (
    <div className="grid grid-cols-[45%_45%] h-full grow bg-[#eeeeee] justify-center text-black m-4 p-4 gap-8 rounded-xl shadow-xl overflow-auto">
      <AnalysisTemplateCard
        title={
          "To Truth or Not to Truth: How Truth in Taxation Constrains Property Taxes"
        }
        link={"/pages/analysis/truth_in_tax"}
        question={
          "To what extent has Truth in Taxation contrained property tax growth?"
        }
        findings={
          "Between 2014 and 2024, Truth in Taxation has reduced tax liability by roughly $X million statewide."
        }
        pubDate={""}
        analyst={"Jared Gibbs"}
      />
      <AnalysisTemplateCard />
    </div>
  );
}
