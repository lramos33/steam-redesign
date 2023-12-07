import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/globals.css";
import "../styles/theme.css";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

import { MotivaSans } from "@/styles/fonts";

import { cn } from "@/helpers/tailwind.helper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(MotivaSans.className, "flex min-h-screen flex-col text-main")}>
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
