import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
})
export class TodoInputComponent implements OnInit {
  constructor(private postsService: PostsService) {}

  newTask = '';

  ngOnInit(): void {}

  addNewTodo(title: string) {
    this.postsService.addNewTodo(title);
    this.newTask = '';
  }
}
