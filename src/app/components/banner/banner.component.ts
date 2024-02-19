import { Component, Input } from '@angular/core';
import { Movie } from '../../types/movie';
import { Tvshow } from '../../types/tvshows';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  @Input() shows: Movie[] = [];
  @Input() title: string = '';
}
