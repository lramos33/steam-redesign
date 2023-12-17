export interface IFriend {
  id: string;
  username: string;
  picturePath: string;
  lastOnline?: string;
  status: "online" | "playing" | "away" | "offline";
}
