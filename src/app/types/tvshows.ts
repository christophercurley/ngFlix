import { Movie } from './movie';

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
};

export type TvshowDto = {
  page: number;
  results: Tvshow[];
  total_pages: number;
  total_results: number;
};

export function mapTvshowsToMovies(tvshows: Tvshow[]): Movie[] {
  return tvshows.map((tvshow) => {
    return {
      ...tvshow,
      title: tvshow.name,
      original_title: tvshow.original_name,
      release_date: tvshow.first_air_date,
      video: false,
    };
  });
}
