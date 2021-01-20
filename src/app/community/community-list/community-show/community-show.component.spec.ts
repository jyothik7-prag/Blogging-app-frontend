import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityShowComponent } from './community-show.component';

describe('CommunityShowComponent', () => {
  let component: CommunityShowComponent;
  let fixture: ComponentFixture<CommunityShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
