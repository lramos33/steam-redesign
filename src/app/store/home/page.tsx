import Image from "next/image";

import HomeGif from "../../../../public/home.gif";

import { Button } from "@/components/primitives/Button";

import { FeaturedSlider } from "@/components/others/FeaturedSlider";
import { SpecialOfferSlider } from "@/components/others/SpecialOffersSlider";
import { BrowseCategorySlider } from "@/components/others/BrowseCategorySlider";
import { FreeToPlaySlider } from "@/components/others/FreeToPlaySlider";

export default function Page() {
  return (
    <div className="from-14% to-28% flex flex-1 flex-col items-center bg-gradient-to-b from-[#00030d] to-[#0e141b]">
      <div className="mb-64 flex flex-col gap-16">
        <Image src={HomeGif} alt="home" width={1440} className="h-[468px] object-cover" />

        <div className="space-y-2">
          <h2 id="featured" className="ml-12 text-lg">
            Featured
          </h2>

          <FeaturedSlider />
        </div>

        <div className="space-y-2">
          <div className="mx-12 flex items-center justify-between">
            <h2 id="special" className="text-lg">
              Special Offers
            </h2>

            <Button variant="link">See more</Button>
          </div>

          <SpecialOfferSlider />
        </div>

        <div className="space-y-2">
          <div className="mx-12 flex items-center justify-between">
            <h2 id="browse" className="text-lg">
              Browse Steam
            </h2>

            <Button variant="link">See more</Button>
          </div>

          <BrowseCategorySlider />
        </div>

        <div className="space-y-2">
          <div className="mx-12 flex items-center justify-between">
            <h2 id="free-to-play" className="text-lg">
              Free to play games
            </h2>

            <Button variant="link">See more</Button>
          </div>

          <FreeToPlaySlider />
        </div>
      </div>
    </div>
  );
}
