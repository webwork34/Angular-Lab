import { Todo } from './../../interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {}

  removeTodo(todo: Todo) {
    this.postsService.removeTodo(todo);
  }
}
