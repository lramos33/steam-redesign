"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Button } from "../primitives/Button";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Icons } from "./Icons";
import { formatCurrency } from "@/helpers/currency.helper";
import { WishlistButton } from "../ui/WishlistButton";

export function Slider() {
  return (
    <Swiper
      loop
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
      modules={[Pagination, Autoplay, Navigation]}
      className="relative max-w-8xl pb-12"
    >
      <SwiperSlide className="flex items-center justify-center rounded px-12">
        <div className="flex h-full w-full gap-4 rounded bg-background-main p-4">
          <Image src="https://picsum.photos/760/450" height={450} width={760} alt="game image" className="rounded" />

          <div className="flex flex-col justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Elden Ring</h2>
              <p className="text=sm">
                The new fantasy action RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an
                Elden Lord in the Lands Between.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="h-28 w-full bg-red-700" />
              <div className="h-28 w-full bg-red-700" />
              <div className="h-28 w-full bg-red-700" />
              <div className="h-28 w-full bg-red-700" />
            </div>

            <div className="flex justify-between">
              <WishlistButton />

              <div className="flex gap-2">
                <p className="flex h-11 items-center text-lg font-bold">{formatCurrency(5999)}</p>
                <Button variant="secondary">Buy now</Button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="flex items-center justify-center rounded px-12">
        <div className="flex h-full w-full gap-4 rounded bg-background-main p-4">
          <Image src="https://picsum.photos/760/450" height={450} width={760} alt="game image" className="rounded" />

          <div className="flex flex-col justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Elden Ring</h2>
              <p className="text=sm">
                The new fantasy action RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an
                Elden Lord in the Lands Between.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="h-28 w-full bg-red-700" />
              <div className="h-28 w-full bg-red-700" />
              <div className="h-28 w-full bg-red-700" />
              <div className="h-28 w-full bg-red-700" />
            </div>

            <div className="flex justify-between">
              <WishlistButton />

              <div className="flex gap-2">
                <p className="flex h-11 items-center text-lg font-bold">{formatCurrency(5999)}</p>
                <Button variant="secondary">Buy now</Button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <Button asIcon variant="unstyled" className="prev-slide absolute left-2 top-1/2 z-50 -translate-y-1/2">
        <Icons.LuChevronLeft className="h-8 w-8" />
      </Button>

      <Button asIcon variant="unstyled" className="next-slide absolute right-2 top-1/2 z-50 -translate-y-1/2">
        <Icons.LuChevronRight className="h-8 w-8" />
      </Button>
    </Swiper>
  );
}
