import { StoreHeader } from "@/components/ui/StoreHeader";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StoreHeader />
      {children}
    </>
  );
}
