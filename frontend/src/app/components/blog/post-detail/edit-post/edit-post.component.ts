import { Component, OnInit } from '@angular/core';
import { Post } from '../../../../services/blog'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BlogService } from '../../../../services/blog.service'
import { equalSegments } from '@angular/router/src/url_tree';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  post: Post
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private service: BlogService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number
      console.log(id)
      this.getPost(id)
    });
  }

  getPost(id: number): void {
    this.service.getPost(id)
      .subscribe(post => {
        this.post = post;
      });
  }
  updatePost(): void {
    this.service.updatePost(this.post)
      .subscribe(post => {
        this.post = post;
      });
  }

  handleresult(event: string) {
    this.post.content_markdown = event;
  }

  readPost(): void {
    this.router.navigate(['/posts/', this.post.id]);
  }

}
