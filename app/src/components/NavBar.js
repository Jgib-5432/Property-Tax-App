import Link from "next/link";

export function NavBar() {
  return (
    <div className="flex ml-8 text-xl flex-row justify-around w-1/4 min-w-120 ">
      <Link href="/" className="place-self-center text-white no-underline">
        Home
      </Link>
      <Link
        href="/pages/map"
        className="place-self-center text-white no-underline"
      >
        Map
      </Link>
      <Link
        href="/pages/entity_profiles"
        className="place-self-center text-white no-underline"
      >
        Entity Profiles
      </Link>
      <Link
        href="/pages/analysis"
        className="place-self-center text-white no-underline"
      >
        Analysis
      </Link>
    </div>
  );
}
