import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MediaDetailComponent } from './pages/media-detail/media-detail.component';
import { MediaListComponent } from './pages/media-list/media-list.component';
import { GenresComponent } from './pages/genres/genres.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'm/details/:id', component: MediaDetailComponent },
  { path: 'm/list', component: MediaListComponent },
  { path: 't/details/:id', component: MediaDetailComponent },
  { path: 't/list', component: MediaListComponent },
  { path: 'genres', component: GenresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
