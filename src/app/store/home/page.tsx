import { Link, Image } from "@/lib/next";

import HomeGif from "../../../../public/home.gif";

import { Button } from "@/components/primitives/Button";

import { FeaturedSlider } from "@/features/store/home/components/FeaturedSlider";
import { TopSellersSlide } from "@/features/store/home/components/TopSellersSlide";
import { FreeToPlaySlider } from "@/features/store/home/components/FreeToPlaySlider";
import { SpecialOfferSlider } from "@/features/store/home/components/SpecialOffersSlider";
import { BrowseCategorySlider } from "@/features/store/home/components/BrowseCategorySlider";
import { NewAndTrendingSlider } from "@/features/store/home/components/NewAndTrendingSlider";

import { STORE_HOME_RECENTLY_UPDATED_MOCK } from "@/mocks/store-home";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col items-center bg-gradient-to-b from-[#00030d] to-gray-950 to-50%">
      <div className="mb-64 flex flex-col gap-16">
        <Image src={HomeGif} alt="home" width={1440} className="h-[468px] object-cover" />

        <div className="space-y-2">
          <h2 className="ml-12 text-lg font-bold">Featured</h2>
          <FeaturedSlider />
        </div>

        <div className="space-y-2">
          <div className="mx-12 flex items-center justify-between">
            <h2 className="text-lg font-bold">Special Offers</h2>
            <Button variant="outline" className="h-8 text-dim">
              See more
            </Button>
          </div>
          <SpecialOfferSlider />
        </div>

        <div className="space-y-2">
          <div className="mx-12 flex items-center justify-between">
            <h2 className="text-lg font-bold">Browse Steam</h2>
            <Button variant="outline" className="h-8 text-dim">
              See more
            </Button>
          </div>
          <BrowseCategorySlider />
        </div>

        <div className="space-y-2">
          <div className="mx-12 flex items-center justify-between">
            <h2 className="text-lg font-bold">Free to play games</h2>
            <Button variant="outline" className="h-8 text-dim">
              See more
            </Button>
          </div>
          <FreeToPlaySlider />
        </div>

        <div className="max-w-[calc(100vw_-_1rem)] space-y-2 2xl:max-w-8xl">
          <div className="mx-12 flex items-center justify-between">
            <h2 className="text-lg font-bold">Recently Updated</h2>
            <Button variant="outline" className="h-8 text-dim">
              See more
            </Button>
          </div>

          <div className="flex items-center gap-4 rounded px-12">
            {STORE_HOME_RECENTLY_UPDATED_MOCK.map(game => (
              <div key={game.id} className="flex flex-1 flex-col gap-4 rounded bg-background-main p-4">
                <Link className="h-36 overflow-hidden" href="#">
                  <Image
                    src={game.thumb}
                    width={460}
                    height={215}
                    alt="game image"
                    className="h-36 flex-1 transform rounded object-cover transition-transform hover:scale-105"
                  />
                </Link>

                <Link href="#" className="space-y-2">
                  <h2 className="text-xl font-bold">{game.name}</h2>
                  <p className="line-clamp-3 text-sm">{game.description}</p>
                </Link>

                <Button className="w-fit self-end">View Updates</Button>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[calc(100vw_-_1rem)] space-y-2 2xl:max-w-8xl">
          <div className="mx-12 flex items-center justify-between">
            <h2 className="text-lg font-bold">New & Trending</h2>
            <Button variant="outline" className="h-8 text-dim">
              See more
            </Button>
          </div>
          <NewAndTrendingSlider />
        </div>

        <div className="max-w-[calc(100vw_-_1rem)] space-y-2 2xl:max-w-8xl">
          <div className="mx-12 flex items-center justify-between">
            <h2 className="text-lg font-bold">Top Sellers</h2>
            <Button variant="outline" className="h-8 text-dim">
              See more
            </Button>
          </div>
          <TopSellersSlide />
        </div>
      </div>
    </div>
  );
}
