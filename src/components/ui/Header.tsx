"use client";

import { Link, usePathname } from "@/lib/next";

import { Toggle } from "../primitives/Toggle";

import { SteamLogo } from "../vectors/SteamLogo";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center bg-background-main px-3 py-4.5">
      <div className="flex items-center gap-8">
        <SteamLogo height="24" fill="#f3f3f3" />

        <Link href="/store/home">
          <Toggle variant="text" pressed={pathname.startsWith("/store")}>
            STORE
          </Toggle>
        </Link>

        <Toggle variant="text" pressed={pathname.startsWith("/community")}>
          COMMUNITY
        </Toggle>

        <Toggle variant="text" pressed={pathname.startsWith("/library")}>
          LIBRARY
        </Toggle>

        <Toggle variant="text" pressed={pathname.startsWith("/downloads")}>
          DOWNLOADS
        </Toggle>
      </div>

      <div></div>
    </header>
  );
}
