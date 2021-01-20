import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggerAddComponent } from './blogger-add.component';

describe('BloggerAddComponent', () => {
  let component: BloggerAddComponent;
  let fixture: ComponentFixture<BloggerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloggerAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloggerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
