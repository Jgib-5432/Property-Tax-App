"use client";

import { MapCard } from "@/components/map_page_components/MapCard";
import { ControlPanel } from "@/components/map_page_components/ControlPanel";

export function MapContent() {
  return (
    <div className="flex flex-row grow text-black my-2 m-2">
      <MapCard />
    </div>
  );
}
