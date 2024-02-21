import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediasService } from '../../services/medias.service';
import { Observable } from 'rxjs';
import { Media } from '../../types/media';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { Video } from '../../types/video';
import { Image } from '../../types/images';

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
  imagesSizes = IMAGES_SIZES;
  private mediaType: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mediasService: MediasService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.mediaType = navigation?.extras.state?.['mediaType'];
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.mediaId = params['id'];
    });

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
  }
}
