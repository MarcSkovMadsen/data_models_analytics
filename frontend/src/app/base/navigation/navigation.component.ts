import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  title = 'Data, Models and Analytics';
  blog_url = environment.api_url + 'blog/index.html';
  docs_url = environment.api_url + 'docs/';
  source_url = 'https://github.com/MarcSkovMadsen/data-models-analytics';
  constructor() { }

  ngOnInit() {
  }

}
