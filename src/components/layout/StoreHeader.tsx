"use client";

import { Link, usePathname } from "@/lib/next";

import { Icons } from "../others/Icons";
import { Toggle } from "../primitives/Toggle";
import { Input } from "../primitives/Input";

export function StoreHeader() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between bg-background-tertiary px-3 py-1.5">
      <div className="flex gap-1.5">
        <Link href="/store/home">
          <Toggle pressed={pathname.startsWith("/store/home")} className="hover:bg-white hover:bg-opacity-10">
            Home
          </Toggle>
        </Link>

        <Toggle pressed={pathname.startsWith("/store/browse")} className="hover:bg-white hover:bg-opacity-10">
          Browse
        </Toggle>

        <Link href="/store/discover">
          <Toggle pressed={pathname.startsWith("/store/discover")} className="hover:bg-white hover:bg-opacity-10">
            Discover
          </Toggle>
        </Link>

        <Toggle pressed={pathname.startsWith("/store/points-shop")} className="hover:bg-white hover:bg-opacity-10">
          Points Shop
        </Toggle>

        <Toggle pressed={pathname.startsWith("/store/curators")} className="hover:bg-white hover:bg-opacity-10">
          Curators
        </Toggle>

        <Toggle pressed={pathname.startsWith("/store/gift-cards")} className="hover:bg-white hover:bg-opacity-10">
          Gift Cards
        </Toggle>

        <Toggle pressed={pathname.startsWith("/store/news")} className="hover:bg-white hover:bg-opacity-10">
          News
        </Toggle>
      </div>

      <div className="flex items-center gap-1.5">
        <Input.Root className="mr-8">
          <Input.IconContainer>
            <Input.Main
              id="search-game"
              placeholder="Search..."
              iconPosition="right"
              className="w-80 border-none bg-[#4b619b20] text-dim placeholder:text-color-secondary"
            />

            <Input.RightIcon icon={Icons.LuSearch} className="text-color-secondary" />
          </Input.IconContainer>
        </Input.Root>

        <Toggle
          format="icon"
          variant="secondary"
          className="hover:bg-white/10 [&[data-state=on]>svg]:fill-color-text-main"
          pressed={pathname.startsWith("/store/wishlist")}
        >
          <Icons.LuHeart />
        </Toggle>

        <Toggle
          format="icon"
          variant="secondary"
          className="hover:bg-white/10 [&[data-state=on]>svg]:fill-color-text-main"
          pressed={pathname.startsWith("/store/cart")}
        >
          <Icons.LuShoppingCart />
        </Toggle>
      </div>
    </header>
  );
}
