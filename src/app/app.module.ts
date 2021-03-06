import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {FeedRetreiverService} from './services/feed-retreiver.service';
import {MomentModule} from 'angular2-moment';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MomentModule
  ],
  providers: [FeedRetreiverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
