import { Todo } from './../interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor() {}

  todoLIst: Todo[] = [];

  fetchData(limit: number): Promise<Todo[]> {
    return fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
      .then((response) => response.json())
      .then((json) => (this.todoLIst = json));
  }

  removeTodo(todo: Todo) {
    this.todoLIst = this.todoLIst.filter((item) => item !== todo);
  }

  addNewTodo(title: string) {
    if (!title.trim()) return;

    this.todoLIst.push({ title, completed: false });
  }
}
