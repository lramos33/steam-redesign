export type TPlatform = "linux" | "macOS" | "windows";

export interface IFeatured {
  id: string;
  name: string;
  description: string;
  thumbs: {
    main: string;
    secondary: string[];
  };
  tags: string[];
  price: number;
  discount?: {
    percentage: number;
    discountedPrice: number;
    endsAt: string;
  };
}

export interface ISpecialOffer {
  id: string;
  name: string;
  thumb: string;
  price: number;
  discount: {
    percentage: number;
    discountedPrice: number;
    endsAt: string;
  };
}

export interface IGameCategory {
  id: string;
  name: string;
  thumb: string;
}

export interface IFreeToPlay {
  id: string;
  name: string;
  thumb: string;
  platforms: TPlatform[];
}

export interface IRecentlyUpdated {
  id: string;
  name: string;
  description: string;
  thumb: string;
}

export interface INewAndTrending {
  id: string;
  name: string;
  thumb: string;
  price: number;
  platforms: TPlatform[];
}

export interface ITopSellers {
  id: string;
  name: string;
  platforms: string[];
  thumb: string;
  price: number;
  discount?: {
    percentage: number;
    discountedPrice: number;
  };
}
