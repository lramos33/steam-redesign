import { StoreHeader } from "@/components/layout/StoreHeader";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StoreHeader />
      <div className="flex flex-1 flex-col items-center bg-background-main">
        <div className="mb-32 w-full max-w-8xl">{children}</div>
      </div>
    </>
  );
}
