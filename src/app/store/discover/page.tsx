import Image from "next/image";

import { Badge } from "@/components/ui/Badge";
import { Discount } from "@/components/ui/Discount";
import { ReviewRatio } from "@/components/ui/ReviewRatio";

import { Toggle } from "@/components/primitives/Toggle";
import { Button } from "@/components/primitives/Button";

import { Icons } from "@/components/others/Icons";

import { formatFullDate } from "@/helpers/date.helper";
import { formatCurrency } from "@/helpers/currency.helper";

import { STORE_DISCOVER_MOCK } from "@/mocks/store-discover";

export default function Page() {
  return (
    <div className="mt-16 flex flex-1 flex-col gap-16">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Lramos33 Discovery Feed</h1>
        <h3 className="text-sm">Recommendations just for you, based on the games you or your friends want and play.</h3>
      </div>

      <div className="flex flex-col gap-8">
        {STORE_DISCOVER_MOCK.map(game => (
          <div key={game.id} className="flex gap-2 rounded bg-background-highlight p-4.5">
            <Image src={game.thumbs.main} height={288} width={460} alt="game image" className="rounded" />

            <div className="flex flex-col justify-between">
              {game.thumbs.secondary.map(thumb => (
                <Image key={thumb} src={thumb} width={160} height={90} alt="game image" className="rounded" />
              ))}
            </div>

            <div className="ml-2 flex h-72 flex-1 flex-col justify-between">
              <div className="relative flex flex-col gap-6">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">{game.name}</h4>
                  <p className="text-dim">
                    Since you {game.recommendation.type === "play" && "played "} {game.recommendation.type === "wish" && "wish for "}
                    <span className="text-main">{game.recommendation.game}</span>
                  </p>
                </div>

                <div className="space-x-1">
                  {game.tags.map(tag => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-dim">
                  {game.platforms.includes("windows") && <Icons.FaWindows className="h-6 w-6" />}
                  {game.platforms.includes("macOS") && <Icons.FaApple className="h-6 w-6" />}
                  {game.platforms.includes("linux") && <Icons.FaSteam className="h-6 w-6" />}

                  <p className="pl-1 text-sm">{formatFullDate(game.releasedDate)}</p>
                </div>

                <ReviewRatio approvalPercentage={game.approvalPercentage} numOfReviews={game.numOfReviews} />

                <div className="absolute right-0 flex gap-2">
                  <Button variant="outline">Ignore</Button>

                  <Toggle format="icon" variant="outline" className="[&[data-state=on]>svg]:fill-color-text-main">
                    <Icons.LuHeart />
                  </Toggle>
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline">Find more like this</Button>

                <div className="flex gap-4 ">
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

                  <Button>Visit Page</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
