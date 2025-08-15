import { NavBar } from "@/components/NavBar";
import { HomeContent } from "@/components/home_page_components/HomeContent";

export function PageTemplate() {
  return (
    <div className="flex flex-col h-screen w-full justify-between">
      <div className="flex flex-col  h-1/10 max-h-34 justify-start sticky top-0 z-1">
        <div className="flex bg-[#196b24] h-1/3 pl-4 text-xl items-center">
          Property Tax App
        </div>
        <div className="flex bg-[#47443e] h-2/3  rounded-b-xl">
          <img
            className="p-2 ml-12"
            src="/assets/Leg Logo White.png"
            alt="logo"
          />
          <NavBar />
        </div>
      </div>
      <HomeContent />
      <div className="flex justify-center bg-[#47443e] h-1/10 max-h-32 object-bottom  rounded-t-xl">
        <div className="p-2 text-l place-self-center">
          <div>A project in progress from the Legislative Fiscal Analyst </div>
          <div>Questions? Contact Jared Gibbs (Jgibbs@le.utah.gov)</div>
        </div>
      </div>
    </div>
  );
}
