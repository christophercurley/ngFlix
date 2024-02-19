import { Component, Input, OnInit } from '@angular/core';
import { formatRating } from '../../utils/movies-utils';
import { IMAGES_BASE_URL, IMAGES_SIZE } from '../../constants/images-sizes';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Media } from '../../types/media';

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
  IMAGES_BASE_URL = IMAGES_BASE_URL;
  IMAGES_SIZE = IMAGES_SIZE;
  formatRating = formatRating;

  constructor() {}

  slideIndex = 0;

  ngOnInit(): void {
    this.mediasLength = this.medias.length;

    this.mediasLength > 1 && this.changeSlide();
  }

  changeSlide() {
    setInterval(() => {
      this.slideIndex < this.mediasLength - 1
        ? (this.slideIndex += 1)
        : (this.slideIndex = 0);
    }, 7000);
  }
}
