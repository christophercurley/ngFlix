import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { formatRating } from '../../utils/movies-utils';
import { Media } from '../../types/media';
import { computeRoute } from '../../utils/medias-utils';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrl: './media-item.component.scss',
})
export class MediaItemComponent implements OnInit {
  @Input() mediaItem: Media | null = null;

  IMAGES_SIZES = IMAGES_SIZES;
  formatRating = formatRating;
  href: string = '';
  computeRoute = computeRoute;

  ngOnInit(): void {
    if (this.mediaItem) {
      this.href = this.computeRoute(
        this.mediaItem.id,
        this.mediaItem.mediaType
      );
    }
  }
}
