import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, MoviesDTO, PaginatedMovieList } from '../types/movie';
import { VideosDTO } from '../types/video';
import { ImagesDTO } from '../types/image';
import { CreditsDTO } from '../types/credit';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl = 'https://api.themoviedb.org/3/';
  private TMDB_API_KEY = '37afcf28b5e4f6f793672f8258fcfea5';

  constructor(private http: HttpClient) {}

  getMoviesByType(type: string, count = 20) {
    return this.http
      .get<MoviesDTO>(
        `${this.apiUrl}movie/${type}?api_key=${this.TMDB_API_KEY}`
      )
      .pipe(map((data) => data.results.slice(0, count)));
  }

  getMovieById(id: string) {
    return this.http.get<Movie>(
      `${this.apiUrl}movie/${id}?api_key=${this.TMDB_API_KEY}`
    );
  }

  getMovieVideos(id: string) {
    return this.http.get<VideosDTO>(
      `${this.apiUrl}movie/${id}/videos?api_key=${this.TMDB_API_KEY}`
    );
  }

  getMovieImages(id: string) {
    return this.http.get<ImagesDTO>(
      `${this.apiUrl}movie/${id}/images?api_key=${this.TMDB_API_KEY}`
    );
  }

  getMovieCredits(id: string) {
    return this.http.get<CreditsDTO>(
      `${this.apiUrl}movie/${id}/credits?api_key=${this.TMDB_API_KEY}`
    );
  }

  getSimilarMovies(id: string, count: number = 20) {
    return this.http
      .get<MoviesDTO>(
        `${this.apiUrl}movie/${id}/similar?api_key=${this.TMDB_API_KEY}`
      )
      .pipe(map((data) => data.results.slice(0, count)));
  }

  searchMovies(
    page: number,
    searchValue?: string
  ): Observable<PaginatedMovieList> {
    const uri: string = searchValue ? 'search/movie' : 'movie/popular';

    return this.http
      .get<MoviesDTO>(
        `${this.apiUrl + uri}?query=${searchValue}&page=${page}&api_key=${
          this.TMDB_API_KEY
        }`
      )
      .pipe(
        map((data) => ({
          totalResults: data.total_results,
          movieList: data.results,
        }))
      );
  }
}
