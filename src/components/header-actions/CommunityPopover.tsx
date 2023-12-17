import { Icons } from "../others/Icons";
import { Tabs } from "../primitives/Tabs";
import { Avatar } from "../primitives/Avatar";
import { Button } from "../primitives/Button";
import { Popover } from "../primitives/Popover";

import { formatLastOnline } from "@/helpers/date.helper";

import { FRIENDS_MOCK } from "@/mocks/friends";
import { Separator } from "../ui/Separator";
import { ScrollArea } from "../primitives/ScrollArea";

export function CommunityPopover() {
  return (
    <Popover.Root>
      <Popover.Trigger className="relative flex items-center gap-2 rounded bg-background-highlight px-4 hover:bg-background-hover">
        <Icons.LuUsers className="h-5 w-5 text-dim" />

        <span className="absolute right-0 top-0 h-4 w-4 -translate-y-1 translate-x-1 rounded-full bg-color-primary text-xs text-black">
          3
        </span>
      </Popover.Trigger>

      <Popover.Content align="end" className="w-[20rem] max-w-xs">
        <div className="flex gap-2">
          <div className="overflow-hidden rounded border-2 border-color-accent-green">
            <Avatar.Root className="h-12 w-12 ">
              <Avatar.Image src="/avatars/random-avatar-0.jpeg" className="h-12 w-12 rounded-none">
                <Avatar.Fallback className="h-12 w-12 rounded-none" />
              </Avatar.Image>
            </Avatar.Root>
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="flex flex-1 items-center justify-between">
              <p className="text-lg font-bold">lramos33</p>

              <Button asIcon className="h-7 w-7 bg-[#76808C0D] text-dim">
                <Icons.LuUserPlus className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-1.5">
              <div className="h-3 w-3 rounded-full bg-color-accent-green" />
              <p className="text-sm text-color-accent-green">Online</p>
              <Icons.LuChevronDown className="h-3 w-3 text-dim" />
            </div>
          </div>
        </div>

        <Tabs.Root defaultValue="friends">
          <Tabs.List className="flex gap-2">
            <Tabs.Item value="friends" className="relative">
              Friends
              <span className="absolute right-0 top-0 h-3 w-3 -translate-y-1 translate-x-1 rounded-full bg-color-primary" />
            </Tabs.Item>

            <Tabs.Item value="activity" className="relative">
              Activity <span className="absolute right-0 top-0 h-3 w-3 -translate-y-1 translate-x-1 rounded-full bg-color-primary" />
            </Tabs.Item>
          </Tabs.List>

          <Tabs.Content value="friends">
            <ScrollArea>
              <div className="max-h-96 space-y-8 pr-2">
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-dim">Online (4)</p>

                  {FRIENDS_MOCK.filter(friend => friend.status === "online").map(friend => (
                    <div key={friend.id} className="flex items-center gap-2">
                      <div className="overflow-hidden rounded border-2 border-color-accent-green">
                        <Avatar.Root className="h-12 w-12 ">
                          <Avatar.Image src={friend.picturePath} className="h-12 w-12 rounded-none">
                            <Avatar.Fallback className="h-12 w-12 rounded-none" />
                          </Avatar.Image>
                        </Avatar.Root>
                      </div>

                      <div className="relative flex flex-1 items-center justify-between">
                        <div className="flex flex-col text-color-accent-green">
                          <p>{friend.username}</p>
                          <p className="text-sm">Online</p>
                        </div>

                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-color-primary text-xs text-black">9</span>
                      </div>
                    </div>
                  ))}

                  {FRIENDS_MOCK.filter(friend => friend.status === "playing").map(friend => (
                    <div key={friend.id} className="flex items-center gap-2">
                      <div className="overflow-hidden rounded border-2 border-color-primary">
                        <Avatar.Root className="h-12 w-12 ">
                          <Avatar.Image src={friend.picturePath} className="h-12 w-12 rounded-none">
                            <Avatar.Fallback className="h-12 w-12 rounded-none" />
                          </Avatar.Image>
                        </Avatar.Root>
                      </div>

                      <div className="flex flex-col text-color-primary">
                        <p>{friend.username}</p>
                        <p className="text-sm">Playing</p>
                      </div>
                    </div>
                  ))}

                  {FRIENDS_MOCK.filter(friend => friend.status === "away").map(friend => (
                    <div key={friend.id} className="flex items-center gap-2">
                      <div className="overflow-hidden rounded border-2 border-color-accent-yellow">
                        <Avatar.Root className="h-12 w-12 ">
                          <Avatar.Image src={friend.picturePath} className="h-12 w-12 rounded-none">
                            <Avatar.Fallback className="h-12 w-12 rounded-none" />
                          </Avatar.Image>
                        </Avatar.Root>
                      </div>

                      <div className="flex flex-col text-color-accent-yellow">
                        <p>{friend.username}</p>
                        <p className="text-sm">Away</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-4">
                  <p className="text-sm text-dim">Offline (6)</p>

                  {FRIENDS_MOCK.filter(friend => friend.status === "offline")
                    .sort((a, b) => {
                      const dateA = a.lastOnline ? new Date(a.lastOnline) : new Date(0);
                      const dateB = b.lastOnline ? new Date(b.lastOnline) : new Date(0);
                      return dateB.getTime() - dateA.getTime();
                    })
                    .map(friend => (
                      <div key={friend.id} className="flex items-center gap-2">
                        <div className="overflow-hidden rounded border-2 border-dim">
                          <Avatar.Root className="h-12 w-12 ">
                            <Avatar.Image src={friend.picturePath} className="h-12 w-12 rounded-none">
                              <Avatar.Fallback className="h-12 w-12 rounded-none" />
                            </Avatar.Image>
                          </Avatar.Root>
                        </div>

                        <div className="flex flex-col text-dim">
                          <p>{friend.username}</p>
                          {friend.lastOnline && <p className="text-sm">{formatLastOnline(friend.lastOnline)}</p>}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </ScrollArea>
          </Tabs.Content>

          <Tabs.Content value="activity" className="space-y-8">
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-sm text-color-primary">Oct 13</p>
                <Separator />
              </div>

              <div className="flex gap-2">
                <div className="h-fit w-fit overflow-hidden rounded border-2 border-dim">
                  <Avatar.Root className="h-8 w-8">
                    <Avatar.Image src="/avatars/random-avatar-4.jpeg" className="h-8 w-8 rounded-none">
                      <Avatar.Fallback className="h-8 w-8 rounded-none" />
                    </Avatar.Image>
                  </Avatar.Root>
                </div>

                <p className="flex-1 text-sm">
                  <span className="text-color-primary">SnickerJedi</span> added <span className="text-color-primary">Cyberpunk 2077</span>{" "}
                  to their wishlist.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-sm text-color-primary">Oct 12</p>
                <Separator />
              </div>

              <div className="flex gap-2">
                <div className="h-fit w-fit overflow-hidden rounded border-2 border-dim">
                  <Avatar.Root className="h-8 w-8">
                    <Avatar.Image src="/avatars/random-avatar-1.jpeg" className="h-8 w-8 rounded-none">
                      <Avatar.Fallback className="h-8 w-8 rounded-none" />
                    </Avatar.Image>
                  </Avatar.Root>
                </div>

                <p className="flex-1 text-sm">
                  <span className="text-color-primary">TacoNinja42</span> now owns{" "}
                  <span className="text-color-primary">Baldur&apos;s Gate 3</span>.
                </p>
              </div>
            </div>

            <div className="space-y-4 opacity-40">
              <div className="space-y-1">
                <p className="text-sm text-color-primary">Oct 09</p>
                <Separator />
              </div>

              <div className="flex gap-2">
                <div className="h-fit w-fit overflow-hidden rounded border-2 border-dim">
                  <Avatar.Root className="h-8 w-8">
                    <Avatar.Image src="/avatars/random-avatar-1.jpeg" className="h-8 w-8 rounded-none">
                      <Avatar.Fallback className="h-8 w-8 rounded-none" />
                    </Avatar.Image>
                  </Avatar.Root>
                </div>

                <p className="flex-1 text-sm">
                  <span className="text-color-primary">TacoNinja42</span> now owns{" "}
                  <span className="text-color-primary">Red Dead Redemption 2</span>.
                </p>
              </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </Popover.Content>
    </Popover.Root>
  );
}
