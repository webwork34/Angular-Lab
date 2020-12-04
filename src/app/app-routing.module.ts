import { NotFoundComponent } from './not-found/not-found.component';
import { ClickerComponent } from './clicker/clicker.component';
import { PostsComponent } from './posts/posts.component';
import { LolComponent } from './lol/lol.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/lol',
    pathMatch: 'full',
  },
  { path: 'lol', component: LolComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'clicker', component: ClickerComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
