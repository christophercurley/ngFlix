import { Component, Input } from '@angular/core';
import { IMAGES_BASE_URL } from '../../constants/images-sizes';
import { formatRating } from '../../utils/movies-utils';
import { Media } from '../../types/media';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.scss',
})
export class ShowItemComponent {
  IMAGES_BASE_URL = IMAGES_BASE_URL;
  formatRating = formatRating;
  @Input() showItem: Media | null = null;

  constructor(private router: Router) {}

  navigateToDetails() {
    if (this.showItem) {
      this.router.navigate(['details/' + this.showItem.id], {
        state: { mediaType: this.showItem.mediaType },
      });
    }
  }
}
