"use client";

import { Icons } from "../others/Icons";

import { Avatar } from "../primitives/Avatar";
import { DropdownMenu } from "../primitives/DropdownMenu";

import { formatCurrency } from "@/helpers/currency.helper";

export function ProfileMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center gap-2 rounded bg-background-highlight p-1 hover:bg-background-hover">
        <Avatar.Root>
          <Avatar.Image src="/avatars/random-avatar-0.jpeg">
            <Avatar.Fallback />
          </Avatar.Image>
        </Avatar.Root>

        <p className="text-sm">lramos33</p>
        <p className="text-sm text-dim">{formatCurrency(1250)}</p>
        <Icons.LuChevronDown className="h-5 w-5" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content>
        <DropdownMenu.Item>Account Details</DropdownMenu.Item>
        <DropdownMenu.Item>Wallet</DropdownMenu.Item>
        <DropdownMenu.Item>Settings</DropdownMenu.Item>
        <DropdownMenu.Item>Client Updates</DropdownMenu.Item>
        <DropdownMenu.Item>Change Account</DropdownMenu.Item>
        <DropdownMenu.Item>Client Updates</DropdownMenu.Item>

        <DropdownMenu.Separator />

        <DropdownMenu.Item>
          <Icons.LuLogOut />
          Sign Out
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
