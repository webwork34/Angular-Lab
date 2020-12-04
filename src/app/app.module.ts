import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LolComponent } from './lol/lol.component';
import { PostsComponent } from './posts/posts.component';
import { ClickerComponent } from './clicker/clicker.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { TodoInputComponent } from './posts/todo-input/todo-input.component';
import { TodoListComponent } from './posts/todo-list/todo-list.component';
import { TodoDebugComponent } from './posts/todo-debug/todo-debug.component';
import { TodoListItemComponent } from './posts/todo-list-item/todo-list-item.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
