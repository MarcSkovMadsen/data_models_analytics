import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUploadMarkdownComponent } from './post-upload-markdown.component';

describe('PostUploadMarkdownComponent', () => {
  let component: PostUploadMarkdownComponent;
  let fixture: ComponentFixture<PostUploadMarkdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostUploadMarkdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostUploadMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
