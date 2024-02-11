import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoviesDto } from '../types/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl = 'https://api.themoviedb.org/3/';
  private TMDB_API_KEY = '37afcf28b5e4f6f793672f8258fcfea5';

  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get<MoviesDto>(
      `${this.apiUrl}movie/popular?api_key=${this.TMDB_API_KEY}`
    );
  }

  getUpcomingMovies() {
    return this.http.get<MoviesDto>(
      `${this.apiUrl}movie/upcoming?api_key=${this.TMDB_API_KEY}`
    );
  }
}
