import { NavBar } from "@/components/NavBar";
import { HomeContent } from "@/components/home_page_components/HomeContent";
import { GlossaryContent } from "@/components/home_page_components/GlossaryContent";
import { MapContent } from "@/components/map_page_components/MapContent";
import { ProfileContent } from "@/components/profile_components/ProfileContent";
import { AnalysisContent } from "@/components/analysis_components/AnalysisContent";
import { StatewideContent } from "@/components/statewide_comparison/StatewideContent";
import { AnalysisTruthinTaxContent } from "@/components/analysis_components/To Truth or not to Truth.js/AnalysisTruthinTaxContent";
import { AnalysisResidTiltContent } from "@/components/analysis_components/Residential Tilt/AnalysisResidTiltContent";

export function PageTemplate({ page }) {
  const pageMap = new Map();
  pageMap.set("Home", <HomeContent />);
  pageMap.set("Map", <MapContent />);
  pageMap.set("Profile", <ProfileContent />);
  pageMap.set("Analysis", <AnalysisContent />);
  pageMap.set("Statewide Comparison", <StatewideContent />);
  pageMap.set("truth_in_tax", <AnalysisTruthinTaxContent />);
  pageMap.set("reside_tilt", <AnalysisResidTiltContent />);
  pageMap.set("Glossary", <GlossaryContent />);

  return (
    <div className="flex flex-col h-screen w-full justify-between">
      <div className="flex flex-col  h-1/10 max-h-34 justify-start static">
        <div className="flex bg-[#196b24] h-1/3 pl-8 text-2xl items-center">
          Vesta {"\u26B6"}
        </div>
        <div className="flex bg-[#47443e] h-2/3  rounded-b-xl">
          <a href="https://le.utah.gov/" className="flex">
            <img
              className="p-2 ml-12"
              src="/assets/Leg Logo White.png"
              alt="logo"
            />{" "}
          </a>
          <NavBar />
        </div>
      </div>
      {pageMap.get(page)}
      <div className="flex justify-center bg-[#47443e] h-1/10 max-h-16 object-bottom  rounded-t-xl">
        <div className="p-2 text-l place-self-center">
          <div>A project in progress from the Legislative Fiscal Analyst </div>
          <div>Questions? Contact Jared Gibbs (Jgibbs@le.utah.gov)</div>
        </div>
      </div>
    </div>
  );
}
