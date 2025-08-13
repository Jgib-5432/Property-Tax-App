import { NavBar } from "@/components/NavBar";
import { HomeContent } from "@/components/HomeContent";

export function PageTemplate() {
  return (
    <div className="flex flex-col h-screen justify-between overflow-auto">
      <div className="flex flex-col w-screen h-1/10 max-h-34 justify-start">
        <div className="flex bg-[#196b24] w-screen h-1/3 pl-4 text-xl items-center">
          Property Tax App
        </div>
        <div className="flex bg-[#47443e] w-screen h-2/3">
          <img
            className="p-2 ml-6"
            src="/assets/Leg Logo White.png"
            alt="logo"
          />
          <NavBar />
        </div>
      </div>
      <HomeContent />
      <div className="flex justify-center bg-[#47443e] w-screen h-1/10 max-h-32 object-bottom">
        <div className="p-2 text-l place-self-center">
          <div>A project in progress from the Legislative Fiscal Analyst </div>
          <div>Questions? Contact Jared Gibbs (Jgibbs@le.utah.gov)</div>
        </div>
      </div>
    </div>
  );
}
