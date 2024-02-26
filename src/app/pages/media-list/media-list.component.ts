import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediasService } from '../../services/medias.service';
import { Title } from '@angular/platform-browser';
import { PaginatedMediaList } from '../../types/media';
import { PaginatorState } from 'primeng/paginator';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrl: './media-list.component.scss',
})
export class MediaListComponent implements OnInit {
  mediaType: string = '';
  mediaTypeTitle: string = '';
  searchValue: string = '';
  totalRecords: number = 0;

  paginatedMediasList$: Observable<PaginatedMediaList> | null = null;

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

    this.searchMediasByPageAndValue(this.mediaType, 1, this.searchValue);
  }

  searchMediasByPageAndValue(
    mediaType: string,
    page: number,
    searchValue: string
  ) {
    this.paginatedMediasList$ = this.mediasService.searchMedias(
      mediaType,
      page,
      searchValue
    );

    this.paginatedMediasList$.subscribe(
      (data) => (this.totalRecords = data.totalResults)
    );
  }

  onPageChange(event: PaginatorState) {
    console.log({ event });
    if (event.page) {
      console.log({ event });
      const pageNumber: number = event.page + 1;

      this.searchMediasByPageAndValue(
        this.mediaType,
        pageNumber,
        this.searchValue
      );
    } else {
      this.searchMediasByPageAndValue(this.mediaType, 1, this.searchValue);
    }
  }
}
