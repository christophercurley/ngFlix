import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';
import { Media } from '../../types/media';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss',
})
export class ShowDetailComponent implements OnInit {
  mediaId: string = '';
  media$: Observable<Media> | null = null;

  constructor(
    private router: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.mediaId = params['id'];
    });

    this.media$ = this.moviesService.getMovieById(this.mediaId);
  }
}
