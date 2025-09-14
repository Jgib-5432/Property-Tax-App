"use client";

import { Sidebar } from "@/components/home_page_components/Sidebar";
import { TitleCard } from "@/components/home_page_components/TitleCard";
import { RealPropCard } from "@/components/home_page_components/RealPropCard";
import { CenAsPropCard } from "@/components/home_page_components/CenAsPropCard";
import { PerPropCard } from "@/components/home_page_components/PerPropCard";

export function GlossaryContent() {
  return (
    <div className=" flex flex-row grow">
      <Sidebar />
      <div className="grid grid-cols-[10%_18%_18%_8%_18%_18%_10%] p-2 bg-[#eeeeee] grow rounded-xl m-2 text-black gap-y-8 gap-x-1">
        <TitleCard />
        <RealPropCard />
        <CenAsPropCard />
        <PerPropCard />
      </div>
    </div>
  );
}
