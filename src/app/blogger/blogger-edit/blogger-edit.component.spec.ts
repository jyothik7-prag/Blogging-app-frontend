import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggerEditComponent } from './blogger-edit.component';

describe('BloggerEditComponent', () => {
  let component: BloggerEditComponent;
  let fixture: ComponentFixture<BloggerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloggerEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloggerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
