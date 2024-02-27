import { Component, Input } from '@angular/core';
import { Media } from '../../types/media';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { formatRating } from '../../utils/movies-utils';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.scss',
})
export class SlideComponent {
  @Input() media: Media | null = null;
  @Input() isForSingleMedia: boolean = false;

  imagesSizes = IMAGES_SIZES;
  formatRating = formatRating;
}
