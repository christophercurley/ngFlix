import { Injectable } from '@angular/core';
import { MoviesService } from './movies.service';
import { mapMovieToMedia } from '../utils/movies-utils';
import { TvshowsService } from './tvshows.service';
import { mapTvshowToMedia } from '../utils/tvshows-utils';
import { Media } from '../types/media';
import { Observable, map } from 'rxjs';
import { Video } from '../types/video';
import { Image } from '../types/image';
import { Credit } from '../types/credit';

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

  getImagesByMediaTypeAndId(type: string, id: string): Observable<Image[]> {
    if (type === 'movie') {
      return this.moviesService
        .getMovieImages(id)
        .pipe(map((data) => data.backdrops));
    } else {
      return this.tvshowsService
        .getTvshowImages(id)
        .pipe(map((data) => data.backdrops));
    }
  }

  getCreditsByMediaTypeAndId(type: string, id: string): Observable<Credit[]> {
    if (type === 'movie') {
      return this.moviesService
        .getMovieCredits(id)
        .pipe(map((data) => data.cast));
    } else {
      return this.tvshowsService
        .getTvshowCredits(id)
        .pipe(map((data) => data.cast));
    }
  }

  getSimilarMediasByMediaTypeAndId(
    type: string,
    id: string
  ): Observable<Media[]> {
    if (type === 'movie') {
      return this.moviesService
        .getSimilarMovies(id, 12)
        .pipe(map((movies) => movies.map(mapMovieToMedia)));
    } else {
      return this.tvshowsService
        .getSimilarTvshows(id, 12)
        .pipe(map((tvshows) => tvshows.map(mapTvshowToMedia)));
    }
  }

  searchMedias(
    type: string,
    page: number,
    searchValue: string
  ): Observable<Media[]> {
    if (type === 'movie') {
      return this.moviesService
        .searchMovies(page, searchValue)
        .pipe(map((movies) => movies.map(mapMovieToMedia)));
    } else {
      return this.tvshowsService
        .searchTvshows(page, searchValue)
        .pipe(map((tvshows) => tvshows.map(mapTvshowToMedia)));
    }
  }
}
