import "../styles/globals.css";
import "../styles/theme.css";

import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";

import { MotivaSans } from "@/styles/fonts";

import { cn } from "@/helpers/tailwind.helper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(MotivaSans.className, "flex min-h-screen flex-col")}>
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
