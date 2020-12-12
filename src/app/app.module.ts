import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LolComponent } from './lol/lol.component';
import { PostsComponent } from './posts/posts.component';
import { ClickerComponent } from './clicker/clicker.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoInputComponent } from './posts/todo-input/todo-input.component';
import { TodoListComponent } from './posts/todo-list/todo-list.component';
import { TodoDebugComponent } from './posts/todo-debug/todo-debug.component';
import { TodoListItemComponent } from './posts/todo-list-item/todo-list-item.component';
import { PlayFieldComponent } from './clicker/play-field/play-field.component';
import { BtnFieldComponent } from './clicker/play-field/btn-field/btn-field.component';
import { InfoFieldComponent } from './clicker/play-field/info-field/info-field.component';
import { DisableControlDirective } from './disable-control.directive';
import { RecordsComponent } from './clicker/records/records.component';
import { FiguresComponent } from './figures/figures.component';
import { QuadrangleComponent } from './figures/quadrangle/quadrangle.component';
import { TriangleComponent } from './figures/triangle/triangle.component';
import { CircleComponent } from './figures/circle/circle.component';

@NgModule({
  declarations: [
    AppComponent,
    LolComponent,
    PostsComponent,
    ClickerComponent,
    NotFoundComponent,
    TodoInputComponent,
    TodoListComponent,
    TodoDebugComponent,
    TodoListItemComponent,
    PlayFieldComponent,
    BtnFieldComponent,
    InfoFieldComponent,
    DisableControlDirective,
    RecordsComponent,
    FiguresComponent,
    QuadrangleComponent,
    TriangleComponent,
    CircleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
