import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/movies.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './components/banner/banner.component';
import { MediaItemComponent } from './components/media-item/media-item.component';
import { TvshowsService } from './services/tvshows.service';
import { MediaDetailComponent } from './pages/media-detail/media-detail.component';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';
import { MediaListComponent } from './pages/media-list/media-list.component';
import { FormsModule } from '@angular/forms';
import { SlideComponent } from './components/slide/slide.component';
import { TabViewModule } from 'primeng/tabview';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { MenuModule } from 'primeng/menu';
import { GenresComponent } from './pages/genres/genres.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    BannerComponent,
    MediaItemComponent,
    MediaDetailComponent,
    VideoEmbedComponent,
    MediaListComponent,
    SlideComponent,
    GenresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TabViewModule,
    ImageModule,
    CarouselModule,
    InputTextModule,
    FormsModule,
    PaginatorModule,
    MenuModule,
  ],
  providers: [MoviesService, TvshowsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
