import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Feed } from '../models/feed';

@Injectable()
export class FeedRetreiverService {
  constructor(private http: Http) { }

  private feedsUrl = [
    'https://pplware.sapo.pt/feed/',
    'https://4gnews.pt/feed/',
    'http://feed.androidauthority.com/'
  ];

  getFeeds() {
    let data : Observable<Feed>[] = [];
    for (let url of this.feedsUrl) {
      data.push(this.http.get('http://demos.angular-craft.com/rss_service.php?url=' + url).map(res => <Feed>res.json().responseData.feed));
    }
    return data;
  }

  getNumberOfFeedsAvaliable(){
    return this.feedsUrl.length;
  }
}
