import { Component, OnInit } from '@angular/core';
import { Post } from '../../../services/blog'
import { BlogService } from '../../../services/blog.service'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Array<Post> // = [new Post(), new Post(), new Post]

  constructor(private service: BlogService, ) { }

  ngOnInit() {
    console.log("getPosts()")
    this.service.getPosts().subscribe(
      (posts) => {
        console.log(posts)
        this.posts = posts;
      }
    )
  }

}
