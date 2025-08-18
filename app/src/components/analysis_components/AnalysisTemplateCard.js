export function AnalysisTemplateCard() {
  return (
    <div className="flex h-96 flex-col bg-white justify-center items-center gap-4 rounded-xl shadow-xl">
      <div className="flex w-8/10 text-4xl text-center">
        {" "}
        Analysis Title: extra long title for test purposes lorem ipsum{" "}
      </div>
      <div className="flex w-full justify-center gap-4 mt-4">
        <div className="flex w-2/10 bg-[#bcb4a5] p-2 text-xl items-center justify-center text-center rounded-xl shadow-xl">
          {" "}
          Research Question{" "}
        </div>
        <div className="flex w-7/10 bg-[#eeeeee]  p-2 items-center justify-center text-center rounded-xl shadow-xl">
          {" "}
          Precise formulation of research question that has been padded in
          length to test behavior for overflow{" "}
        </div>
      </div>
      <div className="flex w-full justify-center gap-4 mt-4">
        <div className="flex w-2/10 bg-[#bcb4a5] p-2 text-xl items-center justify-center text-center rounded-xl shadow-xl">
          {" "}
          Key Findings{" "}
        </div>
        <div className="flex w-7/10 bg-[#eeeeee]  p-2 items-center justify-center text-center rounded-xl shadow-xl">
          {" "}
          Short description of key take-aways from the analysis that answer the
          research question. Make it O.A.R.!{" "}
        </div>
      </div>
      <div className="flex w-full justify-around gap-4 mt-8 ">
        <div> Publication Date </div>
        <div>Lead Analyst</div>
      </div>
    </div>
  );
}
