import localFont from "next/font/local";

export const MotivaSans = localFont({
  src: [
    {
      path: "./fonts/MotivaSansRegular.woff",
      weight: "400",
    },
    {
      path: "./fonts/MotivaSansBold.woff",
      weight: "700",
    },
  ],
});
