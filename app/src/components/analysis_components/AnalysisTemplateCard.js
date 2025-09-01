import Link from "next/link";

export function AnalysisTemplateCard({
  title = "Analysis Title",
  link = "/pages/analysis",
  question = "Precise formulation of the main research question",
  findings = "Description of key take-aways. Make it O.A.R.!",
  pubDate = "Publication Date",
  analyst = "Lead Analyst",
}) {
  return (
    <div className="flex h-96 flex-col bg-white justify-center items-center gap-4 rounded-xl shadow-xl">
      <Link
        href={link}
        className="flex w-8/10 text-4xl text-center text-black no-underline"
      >
        {title}
      </Link>
      <div className="flex w-full justify-center gap-4 mt-4">
        <div className="flex w-2/10 bg-[#bcb4a5] p-2 text-xl items-center justify-center text-center rounded-xl shadow-xl">
          Research Question
        </div>
        <div className="flex w-7/10 bg-[#eeeeee]  p-2 items-center justify-center text-center rounded-xl shadow-xl">
          {question}
        </div>
      </div>
      <div className="flex w-full justify-center gap-4 mt-4">
        <div className="flex w-2/10 bg-[#bcb4a5] p-2 text-xl items-center justify-center text-center rounded-xl shadow-xl">
          {" "}
          Key Findings{" "}
        </div>
        <div className="flex w-7/10 bg-[#eeeeee]  p-2 items-center justify-center text-center rounded-xl shadow-xl">
          {findings}
        </div>
      </div>
      <div className="flex w-full justify-around gap-4 mt-8 ">
        <div> {pubDate} </div>
        <div> {analyst}</div>
      </div>
    </div>
  );
}
