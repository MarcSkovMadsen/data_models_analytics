import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-follow-me',
  templateUrl: './follow-me.component.html',
  styleUrls: ['./follow-me.component.css']
})
export class FollowMeComponent implements OnInit {
  URLS = [
    {
      url: 'https://www.linkedin.com/in/marcskovmadsen/', class: 'fab fa-linkedin', 'title': 'Linked In'
    }
    , { url: 'https://www.facebook.com/marc.skov.madsen', class: 'fab fa-facebook', title: 'Facebook' }

    , {
      url: 'https://twitter.com/MarcSkovMadsen ', class: 'fab fa-twitter ', 'title': 'Twitter'
    }

    , {
      url: 'https://github.com/MarcSkovMadsen/ ', class: 'fab fa-github ', 'title': 'GitHub'
    }

    , {
      url: 'https://marcskovmadsen.visualstudio.com', class: 'fas fa- code ', 'title': 'Azure DevOps'
    }

    , {
      url: 'https://bitbucket.org/marcskovmadsen/', class: 'fab fa- bitbucket ', 'title': 'Bit Bucket'
    }

    , {
      url: 'https://www.strava.com/athletes/7586499', class: 'fab fa- strava ', 'title': 'Strava'
    }

    , { url: 'http://www.bmc-cykling.com/', class: 'fas fa-bicycle ', title: 'BMC' }

    , {
      url: 'http://teamwbr.org/racing.html', class: '', title: 'Team WBR'
    }

    , {
      url: 'https://zwiftpower.com/profile.php?z=81779', class: 'fas fa-bolt ', title: 'Zwift Power'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
