import { Component, Input } from '@angular/core';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { formatRating } from '../../utils/movies-utils';
import { Media } from '../../types/media';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.scss',
})
export class ShowItemComponent {
  IMAGES_SIZES = IMAGES_SIZES;
  formatRating = formatRating;
  @Input() showItem: Media | null = null;

  constructor(private router: Router) {}

  navigateToDetails(mediaType: string) {
    if (this.showItem) {
      if (mediaType === 'movie') {
        this.router.navigate(['m/details/' + this.showItem.id], {
          state: { mediaType: this.showItem.mediaType },
        });
      } else {
        this.router.navigate(['t/details/' + this.showItem.id], {
          state: { mediaType: this.showItem.mediaType },
        });
      }
    }
  }
}
