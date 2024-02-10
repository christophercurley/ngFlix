import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit {
  movies: any;

  constructor(private http: HttpClient) {}
  private TMDB_API_KEY: string = '37afcf28b5e4f6f793672f8258fcfea5';

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.http
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${this.TMDB_API_KEY}`
      )
      .subscribe((data) => {
        console.log(data);
        this.movies = data;
      });
  }
}
