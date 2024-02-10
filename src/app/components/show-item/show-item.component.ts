import { Component } from '@angular/core';
import { IMAGES_BASE_URL } from '../../constants/images-sizes';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.scss',
})
export class ShowItemComponent {
  IMAGES_BASE_URL = IMAGES_BASE_URL;
}
