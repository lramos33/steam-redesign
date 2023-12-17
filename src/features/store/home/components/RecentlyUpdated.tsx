import { Link, Image } from "@/lib/next";

import { Button } from "@/components/primitives/Button";

import { STORE_HOME_RECENTLY_UPDATED_MOCK } from "@/mocks/store-home";

export function RecentlyUpdated() {
  return (
    <div className="max-w-[calc(100vw_-_1rem)] space-y-2 2xl:max-w-8xl">
      <div className="mx-12 flex items-center justify-between">
        <h2 className="text-lg font-bold"></h2>
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
  );
}
