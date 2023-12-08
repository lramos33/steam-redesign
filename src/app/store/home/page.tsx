import Image from "next/image";

import HomeGif from "../../../../public/home.gif";

import { FeaturedSlider } from "@/components/others/FeaturedSlider";

export default function Page() {
  return (
    <div className="from-14% to-28% flex flex-1 flex-col items-center bg-gradient-to-b from-[#00030d] to-[#0e141b]">
      <div className="mb-64 flex flex-col gap-16">
        <Image src={HomeGif} alt="home" width={1440} className="h-[468px] object-cover" />

        <div className="space-y-2">
          <h2 className="ml-12 text-lg">FEATURED & RECOMMENDED</h2>
          <FeaturedSlider />
        </div>
      </div>
    </div>
  );
}
