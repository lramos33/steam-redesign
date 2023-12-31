import { Icons } from "../others/Icons";
import { Button } from "../primitives/Button";
import { SteamLogo } from "../vectors/SteamLogo";

export function Footer() {
  return (
    <footer className="hidden justify-center bg-background-highlight lg:flex">
      <div className="mb-24 mt-12 flex h-fit w-full max-w-8xl justify-between px-6">
        <div className="space-y-8">
          <SteamLogo height="56" width="210" fill="#76808C" />

          <p className="max-w-[340px] text-sm text-dim">
            © 2023 Valve Corporation. All rights reserved. <br />
            All trademarks are property of their respective owners in the US and other countries. <br />
            VAT included in all prices where applicable.
          </p>
        </div>

        <div className="flex gap-32">
          <div className="flex flex-col gap-4">
            <Button variant="link">About Valve</Button>
            <Button variant="link">Jobs</Button>
            <Button variant="link">Steam works</Button>
            <Button variant="link">Steam Distribution</Button>
            <Button variant="link">Support</Button>
          </div>

          <div className="flex flex-col gap-4">
            <Button variant="link">Privacy Policy</Button>
            <Button variant="link">Legal</Button>
            <Button variant="link">Steam Subscriber Agreement</Button>
            <Button variant="link">Refunds</Button>
            <Button variant="link">Cookies</Button>
          </div>
        </div>

        <div className="flex gap-4">
          <Button asIcon className="h-12 w-12 bg-[#76808C0D] text-dim" href="https://www.facebook.com/Steam" isExternal>
            <Icons.FaFacebookF />
          </Button>

          <Button asIcon className="h-12 w-12 bg-[#76808C0D] text-dim" href="https://x.com/Steam" isExternal>
            <Icons.FaXTwitter />
          </Button>
        </div>
      </div>
    </footer>
  );
}
