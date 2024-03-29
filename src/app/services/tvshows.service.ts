import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginatedTvshowList, Tvshow, TvshowDTO } from '../types/tvshow';
import { Observable, map } from 'rxjs';
import { VideosDTO } from '../types/video';
import { ImagesDTO } from '../types/image';
import { CreditsDTO } from '../types/credit';
import { GenresDTO } from '../types/genre';

@Injectable({
  providedIn: 'root',
})
export class TvshowsService {
  private apiUrl = 'https://api.themoviedb.org/3/';
  private TMDB_API_KEY = '37afcf28b5e4f6f793672f8258fcfea5';

  constructor(private http: HttpClient) {}

  getTvShowsByType(type: string, count = 20) {
    return this.http
      .get<TvshowDTO>(`${this.apiUrl}tv/${type}?api_key=${this.TMDB_API_KEY}`)
      .pipe(map((data) => data.results.slice(0, count)));
  }

  getTvshowById(id: string) {
    return this.http.get<Tvshow>(
      `${this.apiUrl}tv/${id}?api_key=${this.TMDB_API_KEY}`
    );
  }

  getTvshowVideos(id: string) {
    return this.http.get<VideosDTO>(
      `${this.apiUrl}tv/${id}/videos?api_key=${this.TMDB_API_KEY}`
    );
  }

  getTvshowImages(id: string) {
    return this.http.get<ImagesDTO>(
      `${this.apiUrl}tv/${id}/images?api_key=${this.TMDB_API_KEY}`
    );
  }

  getTvshowCredits(id: string) {
    return this.http.get<CreditsDTO>(
      `${this.apiUrl}tv/${id}/credits?api_key=${this.TMDB_API_KEY}`
    );
  }

  getSimilarTvshows(id: string, count: number = 20) {
    return this.http
      .get<TvshowDTO>(
        `${this.apiUrl}tv/${id}/similar?api_key=${this.TMDB_API_KEY}`
      )
      .pipe(map((data) => data.results.slice(0, count)));
  }

  searchTvshows(
    page: number,
    searchValue?: string
  ): Observable<PaginatedTvshowList> {
    const uri: string = searchValue ? 'search/tv' : 'tv/popular';

    return this.http
      .get<TvshowDTO>(
        `${this.apiUrl + uri}?query=${searchValue}&page=${page}&api_key=${
          this.TMDB_API_KEY
        }`
      )
      .pipe(
        map((data) => ({
          totalResults: data.total_results,
          tvshowList: data.results,
        }))
      );
  }

  getTvGenres() {
    return this.http
      .get<GenresDTO>(
        `${this.apiUrl}genre/tv/list?api_key=${this.TMDB_API_KEY}`
      )
      .pipe(map((data) => data.genres));
  }
}
