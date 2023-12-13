"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import { Link } from "@/lib/next";

import { Icons } from "../others/Icons";
import { Discount } from "../ui/Discount";
import { Button } from "../primitives/Button";
import { WishlistButton } from "../ui/WishlistButton";

import { STORE_HOME_SPECIAL_OFFERS_MOCK } from "@/mocks/store-home";

export function SpecialOfferSlider() {
  return (
    <Swiper
      loop
      modules={[Pagination, Autoplay, Navigation]}
      className="mySwiper relative max-w-[calc(100vw_-_1rem)] pb-12 2xl:max-w-8xl"
      autoplay={{
        delay: 6000,
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
          <div className="flex h-full w-full gap-4 rounded">
            {STORE_HOME_SPECIAL_OFFERS_MOCK.slice(page * 3, (page + 1) * 3).map(game => (
              <div key={game.id} className="flex flex-1 flex-col gap-4 rounded bg-background-main p-4">
                <Link className="h-48 overflow-hidden" href="#special">
                  <Image
                    src={game.thumb}
                    width={460}
                    height={215}
                    alt="game image"
                    className="h-48 flex-1 transform rounded object-cover transition-transform hover:scale-105"
                  />
                </Link>

                <Link href="#special">
                  <h2 className="text-xl font-bold">{game.name}</h2>
                </Link>

                <div className="flex gap-2 self-end">
                  <Discount
                    fullPrice={game.price}
                    endsAt={game.discount.endsAt}
                    percentage={game.discount.percentage}
                    discountedPrice={game.discount.discountedPrice}
                  />

                  <WishlistButton format="icon" />
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
