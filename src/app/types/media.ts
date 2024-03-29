import { Genre } from './genre';

export type PaginatedMediaList = {
  totalResults: number;
  mediasList: Media[];
};

export type Media = {
  id: number;
  mediaType: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  revenue?: number;
  budget?: number;
  runtime?: string;
  status?: string;
  genres?: Genre[];
};
