"use client";

export function HomeContent() {
  return (
    <div className="relative flex grow flex-col bg-[#eeeeee] rounded-xl m-2 text-black">
      <div className="absolute inset-0 rounded-xl bg-cover bg-center bg-[url(/assets/background3.jpeg)] opacity-25 blur-[2px]"></div>
      <div className="relative z-10 flex justify-center font-bold text-[96px] text-[#196b24] mt-32">
        {"\u26B6"}&nbsp; Vesta &nbsp;{"\u26B6"}
      </div>
      <div className="relative z-10 flex justify-center text-[36px] italic">
        The window in Utah's property tax system.
      </div>
    </div>
  );
}
