import { AnalysisTemplateCard } from "@/components/analysis_components/AnalysisTemplateCard";

export function AnalysisContent() {
  return (
    <div className="grid grid-cols-[45%_45%] h-full grow bg-[#eeeeee] justify-center text-black m-4 p-4 gap-8 rounded-xl shadow-xl overflow-auto">
      <AnalysisTemplateCard />
      <AnalysisTemplateCard />
      <AnalysisTemplateCard />
      <AnalysisTemplateCard />
      <AnalysisTemplateCard />
    </div>
  );
}
