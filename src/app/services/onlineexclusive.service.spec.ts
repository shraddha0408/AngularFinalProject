import { TestBed } from '@angular/core/testing';

import { OnlineexclusiveService } from './onlineexclusive.service';

describe('OnlineexclusiveService', () => {
  let service: OnlineexclusiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineexclusiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
