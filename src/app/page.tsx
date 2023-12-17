import { redirect } from "@/lib/next";

export default function Page() {
  redirect("/store/home");
  return null;
}
