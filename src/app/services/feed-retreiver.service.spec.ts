/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FeedRetreiverService } from './feed-retreiver.service';

describe('FeedRetreiverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedRetreiverService]
    });
  });

  it('should ...', inject([FeedRetreiverService], (service: FeedRetreiverService) => {
    expect(service).toBeTruthy();
  }));
});
