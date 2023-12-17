import { Button } from "@/components/primitives/Button";

interface IFeaturedProps {
  href: string;
  title: string;
  children: React.ReactNode;
}

export function SliderContainer({ href, title, children }: IFeaturedProps) {
  return (
    <div className="space-y-2">
      <div className="mx-12 flex items-center justify-between">
        <h2 className="text-lg font-bold">{title}</h2>
        <Button variant="outline" className="h-8 text-dim" href={href}>
          See more
        </Button>
      </div>

      {children}
    </div>
  );
}
