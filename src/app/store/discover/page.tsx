import { GameCard } from "@/features/store/discover/components/GameCard";

import { STORE_DISCOVER_MOCK } from "@/mocks/store-discover";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col items-center bg-gradient-to-b from-[#00030d] to-gray-950 to-50%">
      <div className="mb-32 mt-16 flex w-full max-w-8xl flex-1 flex-col gap-16">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Lramos33 Discovery Feed</h1>
          <h3 className="text-sm">Recommendations just for you, based on the games you or your friends want and play.</h3>
        </div>

        <div className="flex flex-col gap-8">
          {STORE_DISCOVER_MOCK.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}
