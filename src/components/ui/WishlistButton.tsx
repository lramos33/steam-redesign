import { Icons } from "../others/Icons";

import { cn } from "@/helpers/tailwind.helper";

import { TVariantProps, Toggle } from "../primitives/Toggle";

interface IWishlistButton extends TVariantProps {
  className?: string;
}

export function WishlistButton({ variant = "outline", format = "default", className }: IWishlistButton) {
  return (
    <Toggle format={format} variant={variant} className={cn("[&[data-state=on]>svg]:fill-color-text-main", className)}>
      {format === "default" && "Wishlist"}
      <Icons.LuHeart />
    </Toggle>
  );
}
