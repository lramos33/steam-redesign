import { Icons } from "../others/Icons";

import { formatNumber } from "@/helpers/number.helper";

interface ReviewRatioProps {
  numOfReviews: number;
  approvalPercentage: number;
}

export function ReviewRatio({ approvalPercentage, numOfReviews }: ReviewRatioProps) {
  const likeWidth = `${(9 - 0.125) * (approvalPercentage / 100)}rem`;
  const dislikeWidth = `${(9 - 0.125) * ((100 - approvalPercentage) / 100)}rem`;

  return (
    <div className="flex items-center">
      {approvalPercentage <= 90 && (
        <div className="mr-3 w-36 space-y-2">
          <div className="flex justify-between">
            <div className="flex w-fit items-center gap-1 text-color-primary">
              <p className="text-xs leading-3">{approvalPercentage}%</p>
              <Icons.MdThumbUp className="-translate-y-[2px] opacity-50" />
            </div>

            <div className="flex w-fit items-center gap-1 text-color-accent-red">
              <p className="text-xs leading-3">{100 - approvalPercentage}%</p>
              <Icons.MdThumbDown className="translate-y-[1px] opacity-50" />
            </div>
          </div>

          <div className="flex gap-0.5">
            <div className="h-1 rounded-full bg-color-primary" style={{ width: likeWidth }} />
            <div className="h-1 rounded-full bg-color-accent-red" style={{ width: dislikeWidth }} />
          </div>
        </div>
      )}

      {approvalPercentage > 90 && approvalPercentage < 95 && <p className="mr-1 text-sm text-color-primary">Very positive</p>}
      {approvalPercentage >= 95 && <p className="mr-1 text-sm text-color-primary">Overwhelmingly Positive</p>}

      <p className="text-sm text-color-secondary">({formatNumber(numOfReviews)} User Reviews)</p>
    </div>
  );
}
