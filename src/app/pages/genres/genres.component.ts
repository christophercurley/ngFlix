import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../../types/genre';
import { MoviesService } from '../../services/movies.service';
import { TvshowsService } from '../../services/tvshows.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.scss',
})
export class GenresComponent implements OnInit {
  movieGenres$: Observable<Genre[]> | null = null;
  tvshowGenres$: Observable<Genre[]> | null = null;

  constructor(
    private movieService: MoviesService,
    private tvshowsService: TvshowsService
  ) {}

  ngOnInit(): void {
    this.movieGenres$ = this.movieService.getMoviesGenres();
    this.tvshowGenres$ = this.tvshowsService.getTvGenres();
  }

  getMediasByGenre(id: string) {
    console.log(id);
  }
}
