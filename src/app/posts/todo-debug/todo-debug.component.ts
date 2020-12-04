import { PostsService } from 'src/app/services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-debug',
  templateUrl: './todo-debug.component.html',
  styleUrls: ['./todo-debug.component.scss'],
})
export class TodoDebugComponent implements OnInit {
  constructor(public postsService: PostsService) {}

  ngOnInit(): void {}
}
