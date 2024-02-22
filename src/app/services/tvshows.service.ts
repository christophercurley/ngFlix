import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tvshow, TvshowDto } from '../types/tvshow';
import { map } from 'rxjs';
import { VideosDTO } from '../types/video';
import { ImagesDTO } from '../types/image';
import { CreditsDTO } from '../types/credit';

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
}
