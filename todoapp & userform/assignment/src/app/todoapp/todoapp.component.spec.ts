import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoappComponent } from './todoapp.component';

describe('TodoappComponent', () => {
  let component: TodoappComponent;
  let fixture: ComponentFixture<TodoappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoappComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
