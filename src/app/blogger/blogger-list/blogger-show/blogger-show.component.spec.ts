import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggerShowComponent } from './blogger-show.component';

describe('BloggerShowComponent', () => {
  let component: BloggerShowComponent;
  let fixture: ComponentFixture<BloggerShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloggerShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloggerShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
