import { Component, OnInit } from '@angular/core';
import { Post } from '../../../../services/blog'
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../../services/blog.service'


@Component({
  selector: 'app-read-post',
  templateUrl: './read-post.component.html',
  styleUrls: ['./read-post.component.css']
})
export class ReadPostComponent implements OnInit {
  post: Post
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private service: BlogService,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number
      this.getPost(id)
    });
  }

  getPost(id: number): void {
    this.service.getPost(id)
      .subscribe(post => {
        this.post = post;
        console.log(post)
      });
  }
  // from https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
  copyToClipboard(str: string) {
    const el = document.createElement('textarea');  // Create a <textarea> element
    el.value = str;                                 // Set its value to the string that you want copied
    el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
    el.style.position = 'absolute';
    el.style.left = '-9999px';                      // Move outside the screen to make it invisible
    document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
    const selected =
      document.getSelection().rangeCount > 0        // Check if there is any content selected previously
        ? document.getSelection().getRangeAt(0)     // Store selection if found
        : false;                                    // Mark as false to know no selection existed before
    el.select();                                    // Select the <textarea> content
    document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el);                  // Remove the <textarea> element
    if (selected) {                                 // If a selection existed before copying
      document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
      document.getSelection().addRange(selected);   // Restore the original selection
    }
  };
}

