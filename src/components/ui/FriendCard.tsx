import { NotificationDot } from "./NotificationDot";

import { Avatar } from "../primitives/Avatar";

import { cn } from "@/helpers/tailwind.helper";
import { capitalizeFirstLetter } from "@/helpers/string.helper";

import { IFriend } from "@/types";

interface IFriendCardProps {
  friend: IFriend;
  unreadMessages?: number;
}

export function FriendCard({ friend, unreadMessages }: IFriendCardProps) {
  const variants = {
    online: {
      border: "border-color-accent-green",
      text: "text-color-accent-green",
    },
    playing: {
      border: "border-color-primary",
      text: "text-color-primary",
    },
    away: {
      border: "border-color-accent-yellow",
      text: "text-color-accent-yellow",
    },
    offline: {
      border: "border-dim",
      text: "text-dim",
    },
  };

  return (
    <div className="flex items-center gap-2">
      <div className={cn("overflow-hidden rounded border-2", variants[friend.status].border)}>
        <Avatar.Root className="h-12 w-12 ">
          <Avatar.Image src={friend.picturePath} className="h-12 w-12 rounded-none">
            <Avatar.Fallback className="h-12 w-12 rounded-none" />
          </Avatar.Image>
        </Avatar.Root>
      </div>

      <div className="relative flex flex-1 items-center justify-between">
        <div className={cn("flex flex-col", variants[friend.status].text)}>
          <p>{friend.username}</p>
          <p className="text-sm">{capitalizeFirstLetter(friend.status)}</p>
        </div>

        {unreadMessages && <NotificationDot number={unreadMessages} />}
      </div>
    </div>
  );
}
