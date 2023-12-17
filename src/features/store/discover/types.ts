export interface IDiscoveryFeedGame {
  id: string;
  thumbs: {
    main: string;
    secondary: string[];
  };
  name: string;
  recommendation: {
    type: string;
    game: string;
  };
  tags: string[];
  platforms: string[];
  releasedDate: string;
  numOfReviews: number;
  approvalPercentage: number;
  price: number;
  discount?: {
    percentage: number;
    discountedPrice: number;
    endsAt: string;
  };
}
