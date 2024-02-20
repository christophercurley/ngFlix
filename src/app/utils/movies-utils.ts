import { Movie } from '../types/movie';

export const formatRating = (num: number): number => {
  return Math.round(num * 10) / 10;
};

export function mapMovieToMedia(movie: Movie) {
  return {
    ...movie,
    mediaType: 'movie',
  };
}
