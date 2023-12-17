"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import { Image } from "@/lib/next";

import { Icons } from "../others/Icons";
import { Badge } from "../primitives/Badge";
import { Discount } from "../ui/Discount";
import { Button } from "../primitives/Button";
import { WishlistButton } from "../ui/WishlistButton";

import { formatCurrency } from "@/helpers/currency.helper";

import { STORE_HOME_FEATURED_MOCK } from "@/mocks/store-home";

export function FeaturedSlider() {
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
      {STORE_HOME_FEATURED_MOCK.map(game => (
        <SwiperSlide key={game.id} className="flex items-center justify-center rounded px-12">
          <div className="flex h-full w-full gap-4 rounded bg-background-main p-4">
            <Image src={game.thumbs.main} height={480} width={768} alt="game image" className="rounded" />

            <div className="flex flex-1 flex-col justify-between">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">{game.name}</h2>
                <p className="text-sm">{game.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {game.thumbs.secondary.map(thumb => (
                  <Image key={thumb} src={thumb} width={280} height={112} alt="game image" className="h-28 flex-1 rounded object-cover" />
                ))}
              </div>

              <div className="flex gap-1">
                {game.tags.map(tag => (
                  <Badge key={tag}>{tag}</Badge>
                ))}

                <Badge className="w-8 cursor-pointer text-xl hover:bg-background-hover">+</Badge>
              </div>

              <div className="flex justify-between">
                <WishlistButton />

                <div className="flex gap-2">
                  {game.discount ? (
                    <Discount
                      endsAt={game.discount.endsAt}
                      fullPrice={game.price}
                      percentage={game.discount.percentage}
                      discountedPrice={game.discount.discountedPrice}
                    />
                  ) : (
                    <p className="flex h-11 items-center text-lg font-bold">{formatCurrency(game.price)}</p>
                  )}

                  <Button variant="secondary">Buy now</Button>
                </div>
              </div>
            </div>
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
