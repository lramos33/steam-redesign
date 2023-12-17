import { Image } from "@/lib/next";

import HomeGif from "../../../../public/home.gif";

import { RecentlyUpdated } from "@/features/store/home/components/RecentlyUpdated";
import { SliderContainer } from "@/features/store/home/components/SliderContainer";

import { FeaturedSlider } from "@/features/store/home/components/FeaturedSlider";
import { TopSellersSlide } from "@/features/store/home/components/TopSellersSlide";
import { FreeToPlaySlider } from "@/features/store/home/components/FreeToPlaySlider";
import { SpecialOfferSlider } from "@/features/store/home/components/SpecialOffersSlider";
import { BrowseCategorySlider } from "@/features/store/home/components/BrowseCategorySlider";
import { NewAndTrendingSlider } from "@/features/store/home/components/NewAndTrendingSlider";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col items-center bg-gradient-to-b from-[#00030d] to-gray-950 to-50%">
      <div className="mb-64 flex flex-col gap-16">
        <Image src={HomeGif} alt="home" width={1440} className="h-[468px] object-cover" />

        <SliderContainer title="Featured" href="">
          <FeaturedSlider />
        </SliderContainer>

        <SliderContainer title="Special Offers" href="">
          <SpecialOfferSlider />
        </SliderContainer>

        <SliderContainer title="Browse Steam" href="">
          <BrowseCategorySlider />
        </SliderContainer>

        <SliderContainer title="Free to play games" href="">
          <FreeToPlaySlider />
        </SliderContainer>

        <RecentlyUpdated />

        <SliderContainer title="New & Trending" href="">
          <NewAndTrendingSlider />
        </SliderContainer>

        <SliderContainer title="Top Sellers" href="">
          <TopSellersSlide />
        </SliderContainer>
      </div>
    </div>
  );
}
