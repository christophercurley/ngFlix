import { Genre } from './genre';

export type Tvshow = {
  id: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
  revenue?: number;
  budget?: number;
  runtime?: string;
  status?: string;
  genres?: Genre[];
};

export type TvshowDTO = {
  page: number;
  results: Tvshow[];
  total_pages: number;
  total_results: number;
};
