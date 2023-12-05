import { SteamLogo } from "../vectors/SteamLogo";

export function Footer() {
  return (
    <footer className="flex justify-center bg-background-highlight">
      <div className="mb-24 mt-12 flex h-fit w-full max-w-8xl justify-between">
        <div className="space-y-8">
          <SteamLogo height="56" width="210" fill="#76808C" />

          <p className="max-w-[360px] text-sm text-dim">
            © 2023 Valve Corporation. All rights reserved. <br />
            All trademarks are property of their respective owners in the US and other countries. <br />
            VAT included in all prices where applicable.
          </p>
        </div>

        <div className="flex gap-32">
          <div className="flex flex-col gap-4">
            <p>About Valve</p>
            <p>Jobs</p>
            <p>Steam works</p>
            <p>Steam Distribution</p>
            <p>Support</p>
          </div>

          <div className="flex flex-col gap-4">
            <p>Privacy Policy</p>
            <p>Legal</p>
            <p>Steam Subscriber Agreement</p>
            <p>Refunds</p>
            <p>Cookies</p>
          </div>
        </div>

        <div className="flex gap-4">
          <p className="flex h-12 w-12 items-center justify-center rounded bg-background-hover text-2xl text-dim">f</p>
          <p className="flex h-12 w-12 items-center justify-center rounded bg-background-hover text-2xl text-dim">X</p>
        </div>
      </div>
    </footer>
  );
}
