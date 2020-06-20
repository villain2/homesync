import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SecurityPageComponent } from './components/security-page/security-page.component';
import { MediaPageComponent } from './components/media-page/media-page.component';


const routes: Routes = [
  {path: '', component: HomePageComponent },
  {path: 'security', component: SecurityPageComponent},
  {path: 'media', component: MediaPageComponent},
  {path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
