import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrl: 'header.component.scss',
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        items: [
          { label: 'Home', routerLink: '/' },
          { label: 'Movies', routerLink: '/m/list' },
          { label: 'TV Shows', routerLink: 't/list' },
          { label: 'Genres', routerLink: '/' },
        ],
      },
    ];
  }
}
