import { Component, OnInit } from '@angular/core';
import { Post } from '../../../../services/blog'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BlogService } from '../../../../services/blog.service'


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: BlogService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.addPost()
  }

  addPost(): void {
    let newPost: Post = new Post()

    this.service.addPost(newPost)
      .subscribe(post => {
        newPost = post;
        this.router.navigate(['/posts/edit/', newPost.id]);
      });
  }
}
