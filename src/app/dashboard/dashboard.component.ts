import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  url: string = 'https://4gnews.pt/feed/';
  data;

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.http.get('http://demos.angular-craft.com/rss_service.php?url=' + this.url)
      .map(res => res.json())
      .subscribe(res => {
        this.data = res.responseData.feed;
        console.log(this.data);
      });
  }
  

}
