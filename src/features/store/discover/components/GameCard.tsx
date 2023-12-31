import { Image } from "@/lib/next";

import { Badge } from "@/components/ui/Badge";
import { Discount } from "@/components/ui/Discount";
import { ReviewRatio } from "@/components/ui/ReviewRatio";

import { Button } from "@/components/primitives/Button";
import { WishlistButton } from "@/components/ui/WishlistButton";

import { Icons } from "@/components/others/Icons";

import { formatFullDate } from "@/helpers/date.helper";
import { formatCurrency } from "@/helpers/currency.helper";

import { IDiscoveryFeedGame } from "../types";

interface IGameCardProps {
  game: IDiscoveryFeedGame;
}

export function GameCard({ game }: IGameCardProps) {
  return (
    <div className="flex gap-2 rounded bg-background-main p-4.5">
      <Image src={game.thumbs.main} height={215} width={460} alt="game image" className="h-[272px] w-[582px] rounded object-cover" />

      <div className="flex flex-col justify-between">
        {game.thumbs.secondary.map(thumb => (
          <Image key={thumb} src={thumb} width={256} height={144} alt="game image" className="h-[84px] w-[150px] rounded object-cover" />
        ))}
      </div>

      <div className="relative ml-2 flex h-[272px] flex-1 flex-col justify-between">
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <h4 className="text-2xl font-bold">{game.name}</h4>
            <p className="text-dim">
              Since you {game.recommendation.type === "play" && "played "} {game.recommendation.type === "wish" && "wish for "}
              <span className="text-main">{game.recommendation.game}</span>
            </p>
          </div>

          <div className="flex gap-1">
            {game.tags.map(tag => (
              <Badge key={tag}>{tag}</Badge>
            ))}

            <Badge className="w-8 cursor-pointer text-xl hover:bg-background-hover">+</Badge>
          </div>

          <div className="flex items-center gap-2 text-dim">
            {game.platforms.includes("windows") && <Icons.FaWindows className="h-6 w-6" />}
            {game.platforms.includes("macOS") && <Icons.FaApple className="h-6 w-6" />}
            {game.platforms.includes("linux") && <Icons.FaSteam className="h-6 w-6" />}

            <p className="pl-1 text-sm">{formatFullDate(game.releasedDate)}</p>
          </div>

          <ReviewRatio approvalPercentage={game.approvalPercentage} numOfReviews={game.numOfReviews} />
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

        <div className="absolute right-0 flex gap-2">
          <Button variant="outline">Ignore</Button>
          <WishlistButton format="icon" />
        </div>
      </div>
    </div>
  );
}
