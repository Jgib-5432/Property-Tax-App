import Link from "next/link";

export function NavBar() {
  return (
    <div className="flex ml-8 text-xl flex-row justify-start gap-8 w-2/4 min-w-120 ">
      <Link
        href="/"
        className="flex p-2 place-self-center text-white no-underline rounded-xl hover:bg-[#5e5a52]"
      >
        Home
      </Link>

      <Link
        href="/pages/entity_profiles"
        className="flex p-2 place-self-center text-white no-underline rounded-xl hover:bg-[#5e5a52]"
      >
        Entity Profiles
      </Link>
      <Link
        href="/pages/statewide_comp"
        className="flex p-2 place-self-center text-white no-underline rounded-xl hover:bg-[#5e5a52]"
      >
        Statewide Comparison
      </Link>
      <Link
        href="/pages/analysis"
        className="flex p-2 place-self-center text-white no-underline rounded-xl hover:bg-[#5e5a52]"
      >
        Analysis
      </Link>
      <Link
        href="/pages/glossary"
        className="flex p-2 place-self-center text-white no-underline rounded-xl hover:bg-[#5e5a52]"
      >
        Glossary
      </Link>
    </div>
  );
}

/*
      <Link
        href="/pages/map"
        className="place-self-center text-white no-underline"
      >
        Map
      </Link>


*/
