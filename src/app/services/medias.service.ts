import { Injectable } from '@angular/core';
import { MoviesService } from './movies.service';
import { mapMovieToMedia } from '../utils/movies-utils';
import { TvshowsService } from './tvshows.service';
import { mapTvshowToMedia } from '../utils/tvshows-utils';
import { Media } from '../types/media';
import { Observable, map } from 'rxjs';
import { Video } from '../types/video';

@Injectable({
  providedIn: 'root',
})
export class MediasService {
  media$: Observable<Media> | null = null;

  constructor(
    private moviesService: MoviesService,
    private tvshowsService: TvshowsService
  ) {}

  getMediaByTypeAndId(type: string, id: string): Observable<Media> {
    if (type === 'movie') {
      return this.moviesService.getMovieById(id).pipe(map(mapMovieToMedia));
    } else {
      return this.tvshowsService.getTvshowById(id).pipe(map(mapTvshowToMedia));
    }
  }

  getVideosByMediaTypeAndId(type: string, id: string): Observable<Video[]> {
    if (type === 'movie') {
      return this.moviesService
        .getMovieVideos(id)
        .pipe(map((data) => data.results));
    } else {
      return this.tvshowsService
        .getTvshowVideos(id)
        .pipe(map((data) => data.results));
    }
  }
}
