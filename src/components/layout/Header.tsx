"use client";

import { Link, usePathname } from "@/lib/next";

import { Toggle } from "../primitives/Toggle";
import { SteamLogo } from "../vectors/SteamLogo";

import { ProfileMenu } from "../header-actions/ProfileMenu";
import { LanguageMenu } from "../header-actions/LanguageMenu";
import { CommunityPopover } from "../header-actions/CommunityPopover";
import { NotificationsPopover } from "../header-actions/NotificationsPopover";
import { DrawerMenu } from "./DrawerMenu";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="hidden items-center justify-between bg-background-main px-3 py-2 lg:flex">
      <DrawerMenu />

      <div className="hidden items-center gap-8 xl:flex">
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

      <div className="flex items-center gap-12">
        <div className="flex gap-3">
          <CommunityPopover />
          <NotificationsPopover />
          <ProfileMenu />
        </div>

        <div className="hidden gap-4 xl:flex">
          <Link href="" className="text-sm text-dim">
            Help
          </Link>

          <LanguageMenu />
        </div>
      </div>
    </header>
  );
}
