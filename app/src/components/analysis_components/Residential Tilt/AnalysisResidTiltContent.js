"use client";

export function AnalysisResidTiltContent() {
  return (
    <div className="flex flex-col w-full p-4 items-center gap-8 text-center text-black">
      <div className="text-6xl italic mt-8">Residential Tilt:</div>
      <div className="text-4xl italic">
        Why taxes are going up on homeowners
      </div>
      <div className="grid w-8/10 bg-[#eeeeee] text-lg text-justify indent-8 p-8 gap-4 rounded-xl shadow-xl overflow-auto">
        <p className="text-2xl text-center">Introduction</p>
        <p>
          {" "}
          Truth in Taxation aims at keeping property tax liability flat from
          year to year. Yet, recently taxpayers have experienced increases in
          their liability year to year without taxing entities directly raising
          rates. If Truth in Taxation is working as statute describes, how can
          these two things both be true? The short answer is that Truth in
          Taxation opperates on the aggregate value of property within an
          entity's borders while a taxpayer's liability keys off of the value of
          their property individually. Consequently, if there are dynamics
          within the tax base which change the ratio between the total property
          and an individual's property, those dynamics can drive changes in the
          individual's liability even if Truth in Taxation succeeds at holding
          revenue flat.
        </p>
      </div>
      <div className="grid w-8/10 bg-[#eeeeee] text-lg text-justify indent-8 p-8 gap-4 rounded-xl shadow-xl overflow-auto">
        <p className="text-2xl text-center">Analysis</p>
        <p> Discussion of the methods and results</p>
        <p> </p>
      </div>
    </div>
  );
}
