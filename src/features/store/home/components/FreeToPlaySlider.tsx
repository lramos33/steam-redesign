"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import { Link, Image } from "@/lib/next";

import { Icons } from "../../../../components/others/Icons";

import { Button } from "../../../../components/primitives/Button";

import { STORE_HOME_FREE_TO_PLAY_MOCK } from "@/mocks/store-home";

export function FreeToPlaySlider() {
  return (
    <Swiper
      loop
      modules={[Pagination, Autoplay, Navigation]}
      className="mySwiper relative max-w-[calc(100vw_-_1rem)] pb-12 2xl:max-w-8xl"
      autoplay={{
        delay: 8000,
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
            {STORE_HOME_FREE_TO_PLAY_MOCK.slice(page * 3, (page + 1) * 3).map(game => (
              <div key={game.id} className="flex flex-1 flex-col gap-4 rounded bg-background-main p-4">
                <Link className="h-48 overflow-hidden" href="#">
                  <Image
                    src={game.thumb}
                    width={460}
                    height={215}
                    alt="game image"
                    className="h-48 flex-1 transform rounded object-cover transition-transform hover:scale-105"
                  />
                </Link>

                <Link href="#">
                  <h2 className="text-xl font-bold">{game.name}</h2>
                </Link>

                <div className="flex justify-between">
                  <div className="flex items-center gap-2 text-dim">
                    {game.platforms.includes("windows") && <Icons.FaWindows className="h-6 w-6" />}
                    {game.platforms.includes("macOS") && <Icons.FaApple className="h-6 w-6" />}
                    {game.platforms.includes("linux") && <Icons.FaSteam className="h-6 w-6" />}
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="font-bold text-dim">Free</p>
                    <Button variant="green">Play Now</Button>
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
