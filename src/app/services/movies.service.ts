import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies$: any;
  private TMDB_API_KEY = '37afcf28b5e4f6f793672f8258fcfea5';

  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.TMDB_API_KEY}`
    );
  }
}
