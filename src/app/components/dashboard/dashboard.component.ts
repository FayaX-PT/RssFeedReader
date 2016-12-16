import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Feed } from '../../models/feed';

import { FeedRetreiverService } from '../../services/feed-retreiver.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  feed: Feed;

  constructor(private feedRetreiverService: FeedRetreiverService) {
  }

  ngOnInit() {
    this.feedRetreiverService.getFeeds().subscribe(res => {
      this.feed = res;
      console.log(this.feed);
    });
  }



}
