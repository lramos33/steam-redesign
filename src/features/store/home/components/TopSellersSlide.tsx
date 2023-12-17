"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import { Link, Image } from "@/lib/next";

import { Icons } from "../../../../components/others/Icons";

import { Button } from "../../../../components/primitives/Button";

import { Discount } from "../../../../components/ui/Discount";
import { WishlistButton } from "../../../../components/ui/WishlistButton";

import { formatCurrency } from "@/helpers/currency.helper";

import { STORE_HOME_TOP_SELLERS_MOCK } from "@/mocks/store-home";

export function TopSellersSlide() {
  return (
    <Swiper
      loop
      modules={[Pagination, Autoplay, Navigation]}
      className="mySwiper relative max-w-[calc(100vw_-_1rem)] pb-12 2xl:max-w-8xl"
      autoplay={{
        delay: 4000,
      }}
      navigation={{
        enabled: true,
        prevEl: ".prev-slide",
        nextEl: ".next-slide",
      }}
      pagination={{
        bulletClass: "swiper-pagination-bullet bg-color-secondary rounded-full h-2 w-8",
      }}
    >
      {[0, 1, 2].map(page => (
        <SwiperSlide key={page} className="flex items-center justify-center rounded px-12">
          <div className="grid h-full w-full grid-cols-2 gap-4 rounded">
            {STORE_HOME_TOP_SELLERS_MOCK.slice(page * 6, (page + 1) * 6).map(game => (
              <div key={game.id} className="flex flex-1 gap-4 rounded bg-background-main p-4">
                <Link className="h-24 overflow-hidden" href="#">
                  <Image
                    src={game.thumb}
                    width={460}
                    height={215}
                    alt="game image"
                    className="h-24 w-52 flex-1 transform rounded object-cover transition-transform hover:scale-105"
                  />
                </Link>

                <div className="flex flex-1 flex-col justify-between">
                  <Link href="#">
                    <h2 className="line-clamp-1 text-xl font-bold">{game.name}</h2>
                  </Link>

                  <div className="flex justify-between">
                    <div className="flex items-center gap-2 text-dim">
                      {game.platforms.includes("windows") && <Icons.FaWindows className="h-6 w-6" />}
                      {game.platforms.includes("macOS") && <Icons.FaApple className="h-6 w-6" />}
                      {game.platforms.includes("linux") && <Icons.FaSteam className="h-6 w-6" />}
                    </div>

                    <div className="flex gap-2">
                      {game.discount ? (
                        <Discount
                          fullPrice={game.price}
                          percentage={game.discount.percentage}
                          discountedPrice={game.discount.discountedPrice}
                        />
                      ) : (
                        <p className="flex h-11 items-center text-lg font-bold">{formatCurrency(game.price)}</p>
                      )}

                      <WishlistButton format="icon" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}

      <Button asIcon variant="unstyled" className="prev-slide absolute left-2 top-1/2 z-50 -translate-y-1/2">
        <Icons.LuChevronLeft className="h-8 w-8" />
      </Button>

      <Button asIcon variant="unstyled" className="next-slide absolute right-2 top-1/2 z-50 -translate-y-1/2">
        <Icons.LuChevronRight className="h-8 w-8" />
      </Button>
    </Swiper>
  );
}
