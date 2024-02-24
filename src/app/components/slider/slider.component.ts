import { Component, Input, OnInit } from '@angular/core';
import { formatRating } from '../../utils/movies-utils';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Media } from '../../types/media';
import { Router } from '@angular/router';

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
  @Input() medias: Media[] = [];

  mediasLength: number = 0;
  IMAGES_SIZES = IMAGES_SIZES;
  formatRating = formatRating;

  constructor(private router: Router) {}

  slideIndex = 0;

  ngOnInit(): void {
    this.mediasLength = this.medias.length;

    this.mediasLength > 1 && this.changeSlide();
  }

  navigateToDetails(id: number, mediaType: string) {
    if (mediaType === 'movie') {
      this.router.navigate(['m/details/' + id], {
        state: { mediaType: mediaType },
      });
    } else {
      this.router.navigate(['t/details/' + id], {
        state: { mediaType: mediaType },
      });
    }
  }

  changeSlide() {
    setInterval(() => {
      this.slideIndex < this.mediasLength - 1
        ? (this.slideIndex += 1)
        : (this.slideIndex = 0);
    }, 7000);
  }
}
