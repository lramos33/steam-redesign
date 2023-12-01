import "../styles/globals.css";
import "../styles/theme.css";

import { MotivaSans } from "@/styles/fonts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={MotivaSans.className}>{children}</body>
    </html>
  );
}
