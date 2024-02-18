import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { formatRating } from '../../utils/movie-utils';
import { IMAGES_BASE_URL, IMAGES_SIZE } from '../../constants/images-sizes';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  moviesLength: number = 0;
  IMAGES_BASE_URL = IMAGES_BASE_URL;
  IMAGES_SIZE = IMAGES_SIZE;
  formatRating = formatRating;

  constructor(private moviesService: MoviesService) {}

  movies$ = this.moviesService.getMoviesByType('popular');

  slideIndex = 0;

  ngOnInit(): void {
    this.movies$.subscribe((movies) => {
      this.moviesLength = movies.results.length;
    });

    setInterval(() => {
      this.slideIndex < this.moviesLength - 1
        ? (this.slideIndex += 1)
        : (this.slideIndex = 0);
    }, 7000);
  }
}
