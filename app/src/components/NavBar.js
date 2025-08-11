import Link from "next/link";

export function NavBar() {
  return (
    <div className="flex ml-8 text-xl flex-row justify-around w-1/4">
      <Link href="/" className="place-self-center">
        Home
      </Link>
      <Link href="/pages/map" className="place-self-center">
        Map
      </Link>
      <Link href="/pages/entity_profiles" className="place-self-center">
        Entity Profiles
      </Link>
      <Link href="/pages/analysis" className="place-self-center">
        Analysis
      </Link>
    </div>
  );
}
