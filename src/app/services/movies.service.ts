import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, MoviesDto } from '../types/movie';
import { map } from 'rxjs';
import { VideosDTO } from '../types/video';
import { ImagesDTO } from '../types/images';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl = 'https://api.themoviedb.org/3/';
  private TMDB_API_KEY = '37afcf28b5e4f6f793672f8258fcfea5';

  constructor(private http: HttpClient) {}

  getMoviesByType(type: string, count = 20) {
    return this.http
      .get<MoviesDto>(
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
}
