import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { TvshowsService } from '../../services/tvshows.service';
import { mapTvshowToMedia } from '../../utils/tvshows-utils';
import { map } from 'rxjs';
import { mapMovieToMedia } from '../../utils/movies-utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  popularMovies$ = this.moviesService
    .getMoviesByType('popular', 12)
    .pipe(map((tvshows) => tvshows.map(mapMovieToMedia)));
  upcomingMovies$ = this.moviesService
    .getMoviesByType('upcoming', 12)
    .pipe(map((tvshows) => tvshows.map(mapMovieToMedia)));
  topRatedMovies$ = this.moviesService
    .getMoviesByType('top_rated', 12)
    .pipe(map((tvshows) => tvshows.map(mapMovieToMedia)));
  popularTvshows$ = this.tvshowsService
    .getTvShowsByType('popular', 12)
    .pipe(map((tvshows) => tvshows.map(mapTvshowToMedia)));

  constructor(
    private moviesService: MoviesService,
    private tvshowsService: TvshowsService
  ) {}
}
