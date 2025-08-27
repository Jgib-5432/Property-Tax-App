"use client";

import "leaflet/dist/leaflet.css";
//import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker } from "react-leaflet";
import shapeCounties from "../../../public/data/shape_counties.json";

export function MapCard() {
  return (
    <div className="flex grow bg-[#eeeeee] rounded-xl justify-end items-center p-2">
      <div className="flex flex-col h-full w-8/10 bg-[#ffffff] justify-center items-center rounded-xl shadow-xl/20 mr-6">
        <MapContainer
          className="h-full w-full"
          center={[39.5, -111.8881]}
          zoom={7}
        >
          <TileLayer
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <GeoJSON
            data={shapeCounties}
            style={{ color: "red", fillColor: "red", fillOpacity: 1 }}
          />
        </MapContainer>
      </div>{" "}
    </div>
  );
}
