"use client";

import { Icons } from "../others/Icons";
import { Button } from "../primitives/Button";
import { Popover } from "../primitives/Popover";

export function NotificationsPopover() {
  return (
    <Popover.Root>
      <Popover.Trigger className="relative flex items-center gap-2 rounded bg-background-highlight px-4 hover:bg-background-hover">
        <Icons.LuBell className="h-5 w-5 text-dim" />

        <span className="absolute right-0 top-0 h-4 w-4 -translate-y-1 translate-x-1 rounded-full bg-color-primary text-xs text-black">
          3
        </span>
      </Popover.Trigger>

      <Popover.Content align="end" className="max-w-xs">
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold">Notifications</p>

          <div className="flex gap-1">
            <Button asIcon className="h-7 w-7 bg-[#76808C0D] text-dim">
              <Icons.LuMailCheck className="h-4 w-4" />
            </Button>

            <Button asIcon className="h-7 w-7 bg-[#76808C0D] text-dim">
              <Icons.LuSettings className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <div className="space-y-2 rounded bg-background-main p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-dim">
                <Icons.LuUsers />
                <p className="text-xs">Community</p>
              </div>

              <div className="h-3 w-3 rounded-full bg-color-primary" />
            </div>

            <p className="text-sm">
              <span className="text-color-primary">TacoNinja42</span> left a comment on your profile.
            </p>
          </div>

          <div className="space-y-2 rounded bg-background-main p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-dim">
                <Icons.LuGamepad2 />
                <p className="text-xs">Games</p>
              </div>

              <div className="h-3 w-3 rounded-full bg-color-primary" />
            </div>

            <p className="text-sm">
              <span className="text-color-primary">Cyberpunk 2077</span> - New expansion available.
            </p>
          </div>

          <div className="space-y-2 rounded bg-background-main p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-dim">
                <Icons.LuBadgeDollarSign />
                <p className="text-xs">Special offer</p>
              </div>

              <div className="h-3 w-3 rounded-full bg-color-primary" />
            </div>

            <p className="text-sm">
              <span className="text-color-primary">Red Dead Redemption II</span> - Buy now with 30% OFF.
            </p>
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}
