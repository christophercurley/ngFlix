import { Component, Input } from '@angular/core';
import { Media } from '../../types/media';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  @Input() medias: Media[] = [];
  @Input() title: string = '';
}
