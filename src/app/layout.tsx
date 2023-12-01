import { cn } from "@/helpers/tailwind.helper";
import "../styles/globals.css";
import "../styles/theme.css";

import { Header } from "@/components/ui/Header";

import { MotivaSans } from "@/styles/fonts";
import { Footer } from "@/components/ui/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(MotivaSans.className, "flex min-h-screen flex-col")}>
        <Header />
        <main className="flex flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
