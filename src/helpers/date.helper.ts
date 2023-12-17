import { format } from "date-fns";

export function formatFullDate(timestamp: string) {
  return format(new Date(timestamp), "MMM dd, yyyy");
}

export function formatMonthAndDay(timestamp: string) {
  return format(new Date(timestamp), "MMMM dd");
}

export function formatLastOnline(timestamp: string) {
  const now = new Date();
  const lastOnline = new Date(timestamp);
  const timeDifference = now.getTime() - lastOnline.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);

  if (months > 0) {
    return `Last online ${months} ${months === 1 ? "month" : "months"} ago`;
  } else if (days > 0) {
    return `Last online ${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (hours > 0) {
    return `Last online ${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (minutes > 0) {
    return `Last online ${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else {
    return "Last online just now";
  }
}

export function getRandomTimestamp(config: { type: "past" | "future"; days: number }) {
  const { type, days } = config;
  const currentDate = new Date();

  if (type === "past") {
    const randomMilliseconds = Math.floor(Math.random() * days * 24 * 60 * 60 * 1000);
    const pastDate = new Date(currentDate.getTime() - randomMilliseconds);
    return pastDate.toISOString();
  }

  if (type === "future") {
    const randomMilliseconds = Math.floor(Math.random() * days * 24 * 60 * 60 * 1000);
    const futureDate = new Date(currentDate.getTime() + randomMilliseconds);
    return futureDate.toISOString();
  }
}
