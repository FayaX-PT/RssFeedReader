import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Feed } from '../../models/feed';
import { Observable } from 'rxjs/Observable';

import { FeedRetreiverService } from '../../services/feed-retreiver.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  feeds: Feed[] = [];
  groupFeed = [];
  imgTagRegex = "<img[^>]+src\\s*=\\s*['\"]([^'\"]+)['\"][^>]*>";
  aux = [];

  constructor(private feedRetreiverService: FeedRetreiverService) { }

  ngOnInit() {
    for (let f of this.feedRetreiverService.getFeeds()) {
      f.subscribe(res => {
        this.feeds.push(res);
        console.log(res);
        if (this.feeds.length == this.feedRetreiverService.getNumberOfFeedsAvaliable()) {
          for (let feed of this.feeds) {
            for (let i = 0, x = feed.entries.length; i < x; i++) {
              this.aux.push(feed.entries[i]);
              if (this.aux.length % 3 == 0) {
                this.groupFeed.push(this.aux);
                this.aux = [];
              }
            }
          }
          this.groupFeed.push(this.aux);
        }
      });
    }
  }

  getImageUrl(content) {
    content = content.match("<img[^>]+src\\s*=\\s*['\"]([^'\"]+)['\"][^>]*>");
    return content[1];
  }

}
