import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDebugComponent } from './todo-debug.component';

describe('TodoDebugComponent', () => {
  let component: TodoDebugComponent;
  let fixture: ComponentFixture<TodoDebugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoDebugComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
