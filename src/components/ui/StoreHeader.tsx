"use client";

import { usePathname } from "@/lib/next";

import { Icons } from "../others/Icons";
import { Toggle } from "../primitives/Toggle";

export function StoreHeader() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between bg-background-tertiary px-3 py-1.5 text-main">
      <div className="flex gap-1.5">
        <Toggle pressed={pathname.startsWith("/store/home")}>Home</Toggle>
        <Toggle pressed={pathname.startsWith("/store/browse")}>Browse</Toggle>
        <Toggle pressed={pathname.startsWith("/store/discover")}>Discover</Toggle>
        <Toggle pressed={pathname.startsWith("/store/points-shop")}>Points Shop</Toggle>
        <Toggle pressed={pathname.startsWith("/store/curators")}>Curators</Toggle>
        <Toggle pressed={pathname.startsWith("/store/gift-cards")}>Gift Cards</Toggle>
        <Toggle pressed={pathname.startsWith("/store/news")}>News</Toggle>
      </div>

      <div className="flex gap-1.5">
        <Toggle
          format="icon"
          variant="secondary"
          className="[&[data-state=on]>svg]:fill-color-text-main"
          pressed={pathname.startsWith("/store/wishlist")}
        >
          <Icons.LuHeart />
        </Toggle>

        <Toggle
          format="icon"
          variant="secondary"
          className="[&[data-state=on]>svg]:fill-color-text-main"
          pressed={pathname.startsWith("/store/cart")}
        >
          <Icons.LuShoppingCart />
        </Toggle>
      </div>
    </header>
  );
}
