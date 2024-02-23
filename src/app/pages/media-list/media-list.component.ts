import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediasService } from '../../services/medias.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrl: './media-list.component.scss',
})
export class MediaListComponent implements OnInit {
  mediaType: string = '';
  mediaTypeTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private mediasService: MediasService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe((url) => {
      this.mediaType = url[0].path === 't' ? 'tv' : 'movie';
    });

    this.mediaTypeTitle = this.mediaType === 'tv' ? 'TV Shows' : 'Movies';

    this.titleService.setTitle('ngFlix | ' + this.mediaTypeTitle);
  }
}
