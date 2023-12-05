import { format } from "date-fns";

export function formatFullDate(timestamp: string) {
  return format(new Date(timestamp), "MMM dd, yyyy");
}

export function formatMonthAndDay(timestamp: string) {
  return format(new Date(timestamp), "MMMM dd");
}
