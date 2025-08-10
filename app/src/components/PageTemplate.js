export function PageTemplate() {
  return (
    <div className="flex flex-col h-dvh justify-between">
      <div className="flex flex-col h-dvh justify-start">
        <div className="flex bg-[#196b24] w-screen h-1/25 object-top"></div>
        <div className="flex bg-[#3a3a3a] w-screen h-1/10 object-top">
          <img
            className="p-2 ml-4"
            src="/assets/Leg Logo White.png"
            alt="logo"
          />
          <div className="flex ml-4 text-5xl place-self-center">
            Property Tax App
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#3a3a3a] w-screen h-1/10 object-bottom">
        <div className="p-2 text-l place-self-center">
          <div>A project in progress from the Legislative Fiscal Analyst. </div>
          <div>Questions? Contact Jared Gibbs (Jgibbs@le.utah.gov)</div>
        </div>
      </div>
    </div>
  );
}
