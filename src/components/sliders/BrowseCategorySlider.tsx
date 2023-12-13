"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import { Link } from "@/lib/next";

import { Icons } from "../others/Icons";
import { Button } from "../primitives/Button";

import { cn } from "@/helpers/tailwind.helper";

import { STORE_HOME_BROWSE_BY_CATEGORY_MOCK } from "@/mocks/store-home";

export function BrowseCategorySlider() {
  const gradientPicker = [
    "from-[#450a0a80] to-[#450a0a]",
    "from-[#17255480] to-[#172554]",
    "from-[#42200680] to-[#422006]",
    "from-[#2e106580] to-[#2e1065]",
    "from-[#052e1680] to-[#052e16]",
    "from-[#08334480] to-[#083344]",
    "from-[#4a044e80] to-[#4a044e]",
  ];

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
      {[0, 1, 2, 3].map(page => (
        <SwiperSlide key={page} className="flex items-center justify-center rounded px-12">
          <div className="flex h-full w-full gap-4">
            {STORE_HOME_BROWSE_BY_CATEGORY_MOCK.slice(page * 5, (page + 1) * 5).map((category, index) => (
              <Link href="#" key={category.id} className="relative flex flex-1">
                <div className="h-64 w-64 overflow-hidden">
                  <Image
                    src={category.thumb}
                    width={256}
                    height={256}
                    alt="game image"
                    className="h-64 w-64 transform rounded object-cover transition-transform hover:scale-105"
                  />
                </div>

                <div
                  className={cn(
                    "pointer-events-none absolute h-64 w-full bg-gradient-to-b",
                    gradientPicker[(index + page * 5) % gradientPicker.length]
                  )}
                />

                <p className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xl font-bold">
                  {category.name}
                </p>
              </Link>
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
