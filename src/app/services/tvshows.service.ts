import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tvshow, TvshowDto } from '../types/tvshows';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TvshowsService {
  private apiUrl = 'https://api.themoviedb.org/3/';
  private TMDB_API_KEY = '37afcf28b5e4f6f793672f8258fcfea5';

  constructor(private http: HttpClient) {}

  getTvShowsByType(type: string, count = 20) {
    return this.http
      .get<TvshowDto>(`${this.apiUrl}tv/${type}?api_key=${this.TMDB_API_KEY}`)
      .pipe(map((data) => data.results.slice(0, count)));
  }

  getTvshowById(id: string) {
    return this.http.get<Tvshow>(
      `${this.apiUrl}tv/${id}?api_key=${this.TMDB_API_KEY}`
    );
  }
}
