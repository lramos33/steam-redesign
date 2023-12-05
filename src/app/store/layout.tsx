import { StoreHeader } from "@/components/layout/StoreHeader";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StoreHeader />
      {children}
    </>
  );
}
