import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Media } from '../../types/media';
import { computeRoute } from '../../utils/medias-utils';

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
  @Input() isForSingleMedia: boolean = false;

  mediasLength: number = 0;
  IMAGES_SIZES = IMAGES_SIZES;
  computeRoute = computeRoute;

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
