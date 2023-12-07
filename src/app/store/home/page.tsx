import Image from "next/image";

import HomeGif from "../../../../public/home.gif";

import { Slider } from "@/components/others/Slider";

export default function Page() {
  return (
    <div className="from-14% to-28% flex flex-1 flex-col items-center bg-gradient-to-b from-[#00030d] to-[#0e141b]">
      <div className="mb-64 flex flex-col gap-16">
        <Image src={HomeGif} alt="home" width={1440} className="h-[468px] object-cover" />
        <Slider />
      </div>
    </div>
  );
}
