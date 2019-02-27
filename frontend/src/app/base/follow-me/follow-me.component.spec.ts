import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowMeComponent } from './follow-me.component';

describe('FollowMeComponent', () => {
  let component: FollowMeComponent;
  let fixture: ComponentFixture<FollowMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
