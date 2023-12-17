import { HTMLProps, ReactNode } from "react";

import { Image, ImageProps } from "@/lib/next";

import { Icons } from "../others/Icons";

import { cn } from "@/helpers/tailwind.helper";

// ================================== //

interface AvatarRootProps extends HTMLProps<HTMLDivElement> {}

function AvatarRoot({ className, ...props }: AvatarRootProps) {
  return <div className={cn("h-8 w-8 rounded", className)} {...props} />;
}

// ================================== //

interface AvatarFallbackProps extends HTMLProps<HTMLDivElement> {}

function AvatarFallback({ className, children, ...props }: AvatarFallbackProps) {
  return (
    <div className={cn("flex h-8 w-8 items-center justify-center rounded bg-background-tertiary", className)} {...props}>
      {children}
      {!children && <Icons.LuUser className="h-3/5 w-3/5 text-main" />}
    </div>
  );
}

// ================================== //

interface AvatarImageProps extends Omit<ImageProps, "src" | "alt"> {
  children: ReactNode;
  src: string | undefined;
}

function AvatarImage({ src, className, children, ...props }: AvatarImageProps) {
  if (!src) return children;
  return <Image width={512} height={512} src={src} className={cn("h-8 w-8 rounded", className)} {...props} alt="Avatar" />;
}

// ================================== //

export const Avatar = {
  Root: AvatarRoot,
  Image: AvatarImage,
  Fallback: AvatarFallback,
};
