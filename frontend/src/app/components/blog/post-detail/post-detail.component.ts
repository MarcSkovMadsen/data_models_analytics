import { Component, OnInit } from '@angular/core';
import { Post } from '../../../services/blog'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BlogService } from '../../../services/blog.service'
import { equalSegments } from '@angular/router/src/url_tree';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post
  edit: boolean = false
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
      if (id == 0) {
        this.post = new Post();
        this.edit = true;
      }
      else {
        this.getPost(id)
      }
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
    console.log("Received: " + event)
  }

}
