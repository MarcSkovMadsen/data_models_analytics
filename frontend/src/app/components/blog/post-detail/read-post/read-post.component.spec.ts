import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadPostComponent } from './read-post.component';

describe('ReadPostComponent', () => {
  let component: ReadPostComponent;
  let fixture: ComponentFixture<ReadPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
