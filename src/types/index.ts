export interface IGamesQuery {
  page?: number;
  page_size?: number;
  search?: string;
  platforms?: number;
  genres?: number;
  tags?: number;
  metacritic?: number;
}

export interface IGamesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IGame[];
}

export interface IPlatformsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPlatform[];
}

export interface IPlatform {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image: string;
  year_start: number;
  year_end: number;
}

export interface ESRBRating {
  id: number;
  slug: string;
  name: string;
}

export interface PlatformInfo {
  id: number;
  slug: string;
  name: string;
}

export interface Platform {
  platform: PlatformInfo;
  released_at: string;
  requirements: {
    minimum: string;
    recommended: string;
  };
}

export interface Ratings {
  [key: string]: unknown;
}

export interface AddedByStatus {
  [key: string]: unknown;
}

export interface IGame {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Ratings;
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: AddedByStatus;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string; // ISO string
  esrb_rating: ESRBRating | null;
  platforms: Platform[];
}
