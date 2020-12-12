import { CircleComponent } from './figures/circle/circle.component';
import { TriangleComponent } from './figures/triangle/triangle.component';
import { QuadrangleComponent } from './figures/quadrangle/quadrangle.component';
import { FiguresComponent } from './figures/figures.component';
import { RecordsComponent } from './clicker/records/records.component';
import { PlayFieldComponent } from './clicker/play-field/play-field.component';
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
  { path: 'clicker/play-field', component: PlayFieldComponent },
  { path: 'clicker/records', component: RecordsComponent },
  {
    path: 'figures',
    component: FiguresComponent,
    children: [
      {
        path: '',
        redirectTo: '/figures/quadrangle',
        pathMatch: 'full',
      },
      { path: 'quadrangle', component: QuadrangleComponent },
      { path: 'triangle', component: TriangleComponent },
      { path: 'circle', component: CircleComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
