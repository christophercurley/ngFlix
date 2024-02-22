import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { TvshowsService } from '../../services/tvshows.service';
import { mapTvshowToMedia } from '../../utils/tvshows-utils';
import { Observable, map } from 'rxjs';
import { mapMovieToMedia } from '../../utils/movies-utils';
import { Media } from '../../types/media';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  popularMovies$: Observable<Media[]> = this.moviesService
    .getMoviesByType('popular', 12)
    .pipe(map((tvshows) => tvshows.map(mapMovieToMedia)));
  upcomingMovies$: Observable<Media[]> = this.moviesService
    .getMoviesByType('upcoming', 12)
    .pipe(map((tvshows) => tvshows.map(mapMovieToMedia)));
  topRatedMovies$: Observable<Media[]> = this.moviesService
    .getMoviesByType('top_rated', 12)
    .pipe(map((tvshows) => tvshows.map(mapMovieToMedia)));
  popularTvshows$: Observable<Media[]> = this.tvshowsService
    .getTvShowsByType('popular', 12)
    .pipe(map((tvshows) => tvshows.map(mapTvshowToMedia)));

  constructor(
    private moviesService: MoviesService,
    private tvshowsService: TvshowsService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('ngFlix - Your Source For Movies');
  }
}
