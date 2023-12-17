import { IFriends } from "@/types";
import { getRandomTimestamp } from "@/helpers/date.helper";

export const FRIENDS_MOCK: IFriends[] = [
  {
    id: "e6f2aa8b-527b-43e4-a291-5fedee56a7d0",
    username: "TacoNinja42",
    status: "online",
    picturePath: "/avatars/random-avatar-1.jpeg",
  },
  {
    id: "e0348ea6-ff1c-4a3c-a1bd-b4884f9b9a43",
    username: "FunkyPenguinPilot",
    status: "playing",
    picturePath: "/avatars/random-avatar-2.jpeg",
  },
  {
    id: "46b76d73-5bb9-48a8-af64-9744add86cf9",
    username: "WaffleWizardX",
    status: "playing",
    picturePath: "/avatars/random-avatar-3.jpeg",
  },
  {
    id: "4c774c88-2a7f-4ccc-a59f-8932d5dafd50",
    username: "SnickerJedi",
    status: "away",
    picturePath: "/avatars/random-avatar-4.jpeg",
  },
  {
    id: "4028e8b1-e331-44f1-8327-739e00d93b9e",
    username: "DiscoPirate5000",
    status: "offline",
    picturePath: "/avatars/random-avatar-5.jpeg",
    lastOnline: getRandomTimestamp({ type: "past", days: 0.05 }),
  },
  {
    id: "50eff319-ec04-4055-924d-9bc396e3e09a",
    username: "MemeMaverick",
    status: "offline",
    picturePath: "/avatars/random-avatar-6.jpeg",
    lastOnline: getRandomTimestamp({ type: "past", days: 2 }),
  },
  {
    id: "062f3f98-a082-4cf6-bdac-849a2c3968ed",
    username: "WhoopeeWombat",
    status: "offline",
    picturePath: "/avatars/random-avatar-7.jpeg",
    lastOnline: getRandomTimestamp({ type: "past", days: 3 }),
  },
  {
    id: "6aeb6cbe-3a6a-4bc2-98a5-3eb7acb095e0",
    username: "BanterBlast",
    status: "offline",
    picturePath: "/avatars/random-avatar-8.jpeg",
    lastOnline: getRandomTimestamp({ type: "past", days: 10 }),
  },
  {
    id: "4e84b13c-0493-4805-9894-397b3fc7c46e",
    username: "ZanyZeppelin",
    status: "offline",
    picturePath: "/avatars/random-avatar-9.jpeg",
    lastOnline: getRandomTimestamp({ type: "past", days: 15 }),
  },
  {
    id: "cedea60a-0406-4db7-bc94-bc2e5e6c80d9",
    username: "QuipQuasar",
    status: "offline",
    picturePath: "/avatars/random-avatar-10.jpeg",
    lastOnline: getRandomTimestamp({ type: "past", days: 60 }),
  },
];
