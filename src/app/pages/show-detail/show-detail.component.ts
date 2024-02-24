import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediasService } from '../../services/medias.service';
import { Observable } from 'rxjs';
import { Media } from '../../types/media';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { Video } from '../../types/video';
import { Image } from '../../types/image';
import { Credit } from '../../types/credit';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss',
})
export class ShowDetailComponent implements OnInit {
  mediaId: string = '';
  media$: Observable<Media> | null = null;
  mediaVideos$: Observable<Video[]> | null = null;
  mediaImages$: Observable<Image[]> | null = null;
  mediaCredits$: Observable<Credit[]> | null = null;
  relatedMedias$: Observable<Media[]> | null = null;
  imagesSizes = IMAGES_SIZES;
  mediaType: string = '';
  mediaTypeFormatted: string = '';

  constructor(
    private route: ActivatedRoute,
    private mediasService: MediasService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe((url) => {
      this.mediaType = url[0].path === 't' ? 'tv' : 'movie';
    });

    this.mediaTypeFormatted = this.mediaType === 'movie' ? 'Movie' : 'TV Show';

    this.route.params.subscribe((params) => {
      this.mediaId = params['id'];

      this.media$ = this.mediasService.getMediaByTypeAndId(
        this.mediaType,
        this.mediaId
      );

      this.mediaVideos$ = this.mediasService.getVideosByMediaTypeAndId(
        this.mediaType,
        this.mediaId
      );

      this.mediaImages$ = this.mediasService.getImagesByMediaTypeAndId(
        this.mediaType,
        this.mediaId
      );

      this.mediaCredits$ = this.mediasService.getCreditsByMediaTypeAndId(
        this.mediaType,
        this.mediaId
      );

      this.relatedMedias$ = this.mediasService.getSimilarMediasByMediaTypeAndId(
        this.mediaType,
        this.mediaId
      );

      this.media$?.subscribe((media) => {
        this.titleService.setTitle('ngFlix | ' + media.title);
      });
    });
  }
}
