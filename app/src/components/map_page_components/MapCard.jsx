"use client";

import "leaflet/dist/leaflet.css";
//import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker } from "react-leaflet";
import shapeCounties from "../../../public/data/shape_counties.json";

export function MapCard() {
  return (
    <div className="flex grow bg-[#eeeeee] rounded-xl justify-end items-center p-2">
      <p className="flex flex-col h-full w-2/10 justify-center items-center text-black text-4xl italic">
        Coming soon!
      </p>
      <div className="flex flex-col h-full w-8/10 bg-[#ffffff] justify-center items-center rounded-xl shadow-xl/20 mr-6"></div>{" "}
    </div>
  );
}
