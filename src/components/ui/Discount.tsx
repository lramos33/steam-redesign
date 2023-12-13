import { formatMonthAndDay } from "@/helpers/date.helper";
import { formatCurrency } from "@/helpers/currency.helper";

interface DiscountProps {
  endsAt: string;
  fullPrice: number;
  percentage: number;
  discountedPrice: number;
}

export function Discount({ discountedPrice, fullPrice, endsAt, percentage }: DiscountProps) {
  return (
    <div className="flex items-end gap-2">
      <p className="text-xs text-dim">Until {formatMonthAndDay(endsAt)}</p>

      <p className="flex h-11 items-center justify-center rounded bg-color-accent-green px-3 text-lg font-bold text-dark">-{percentage}%</p>

      <div className="flex h-full flex-col justify-between">
        <p className="text-lg font-bold leading-5 text-dim line-through decoration-color-text-main">{formatCurrency(fullPrice)}</p>
        <p className="text-lg font-bold leading-5">{formatCurrency(discountedPrice)}</p>
      </div>
    </div>
  );
}
