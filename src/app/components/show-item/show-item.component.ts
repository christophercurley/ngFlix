import { Component, Input } from '@angular/core';
import { IMAGES_BASE_URL } from '../../constants/images-sizes';
import { Movie } from '../../types/movie';
import { formatRating } from '../../utils/movies-utils';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.scss',
})
export class ShowItemComponent {
  IMAGES_BASE_URL = IMAGES_BASE_URL;
  formatRating = formatRating;
  @Input() showItem: Movie | null = null;
}
