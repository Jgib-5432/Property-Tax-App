export function HomeContent() {
  return (
    <div className="grid grid-cols-[10%_16%_16%_16%_16%_16%_10%] grid-rows-5 p-2 bg-blue-500 w-screen grow opacity-25">
      <div className="grid bg-green-500 col-start-2 col-span-5 row-span-2">
        left
      </div>
      <div className="grid bg-black row-start-3 col-start-2 col-span-2 row-span-2">
        center
      </div>
      <div className="grid bg-red-500 row-start-4 col-start-5 col-span-2 row-span-2">
        right
      </div>
    </div>
  );
}
