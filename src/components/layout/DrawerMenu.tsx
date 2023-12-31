"use client";

import { Link, usePathname } from "@/lib/next";

import { Toggle } from "../primitives/Toggle";
import { Drawer } from "../primitives/Drawer";

import { LanguageMenu } from "../header-actions/LanguageMenu";

import { Icons } from "../others/Icons";

export function DrawerMenu() {
  const pathname = usePathname();

  return (
    <div className="flex xl:hidden">
      <Drawer.Root>
        <Drawer.Trigger>
          <Icons.LuMenu className="h-8 w-8" />
        </Drawer.Trigger>

        <Drawer.Content className="justify-between">
          <div className="flex flex-col gap-8">
            <Link href="/store/home">
              <Toggle variant="text" className="justify-start" pressed={pathname.startsWith("/store")}>
                STORE
              </Toggle>
            </Link>

            <Toggle variant="text" className="justify-start" pressed={pathname.startsWith("/community")}>
              COMMUNITY
            </Toggle>

            <Toggle variant="text" className="justify-start" pressed={pathname.startsWith("/library")}>
              LIBRARY
            </Toggle>

            <Toggle variant="text" className="justify-start" pressed={pathname.startsWith("/downloads")}>
              DOWNLOADS
            </Toggle>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="" className="text-sm text-dim">
              Help
            </Link>

            <LanguageMenu />
          </div>
        </Drawer.Content>
      </Drawer.Root>
    </div>
  );
}
