import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Feed } from '../models/feed';

@Injectable()
export class FeedRetreiverService {
  constructor(private http: Http) { }

  url: string = 'https://4gnews.pt/feed/';

  getFeeds() {
    return this.http.get('http://demos.angular-craft.com/rss_service.php?url=' + this.url).map(res => <Feed>res.json().responseData.feed);
  }
}
