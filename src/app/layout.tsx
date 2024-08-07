import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/globals.css";
import "../styles/theme.css";

import { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

import { MotivaSans } from "@/styles/fonts";

import { cn } from "@/helpers/tailwind.helper";

export const metadata: Metadata = {
  title: {
    default: "Welcome to Steam",
    template: "%s | Steam",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(MotivaSans.className, "flex min-h-screen flex-col text-main")}>
        <Header />
        <main className="hidden flex-1 flex-col 2xl:flex">{children}</main>
        <main className="flex flex-1 items-center justify-center bg-background-main 2xl:hidden">Only available for +1440px screens</main>
        <Footer />
      </body>
    </html>
  );
}
