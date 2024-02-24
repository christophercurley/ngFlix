import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { formatRating } from '../../utils/movies-utils';
import { Media } from '../../types/media';
import { Router } from '@angular/router';
import { computeRoute } from '../../utils/medias-utils';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.scss',
})
export class ShowItemComponent implements OnInit {
  @Input() showItem: Media | null = null;

  IMAGES_SIZES = IMAGES_SIZES;
  formatRating = formatRating;
  href: string = '';
  computeRoute = computeRoute;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.showItem) {
      this.href = this.computeRoute(this.showItem.id, this.showItem.mediaType);
    }
  }
}
