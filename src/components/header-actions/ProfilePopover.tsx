"use client";

import { Icons } from "../others/Icons";
import { Avatar } from "../primitives/Avatar";
import { Button } from "../primitives/Button";
import { Popover } from "../primitives/Popover";

import { formatCurrency } from "@/helpers/currency.helper";

export function ProfilePopover() {
  return (
    <Popover.Root>
      <Popover.Trigger className="flex items-center gap-2 rounded bg-background-highlight p-1 hover:bg-background-hover">
        <Avatar.Root>
          <Avatar.Image src="/avatars/random-avatar-0.jpeg">
            <Avatar.Fallback />
          </Avatar.Image>
        </Avatar.Root>

        <p className="text-sm">lramos33</p>
        <p className="text-sm text-dim">{formatCurrency(1250)}</p>
        <Icons.LuChevronDown className="h-5 w-5" />
      </Popover.Trigger>

      <Popover.Content className="gap-0 overflow-hidden rounded p-0">
        <Button className="justify-start rounded-none text-sm">Account Details</Button>
        <Button className="justify-start text-sm">Wallet</Button>
        <Button className="justify-start text-sm">Settings</Button>
        <Button className="justify-start text-sm">Client Updates</Button>
        <Button className="justify-start text-sm">Go Offline</Button>
        <Button className="justify-start text-sm">Change Account</Button>
        <Button className="justify-start text-sm">Sign Out</Button>
      </Popover.Content>
    </Popover.Root>
  );
}
