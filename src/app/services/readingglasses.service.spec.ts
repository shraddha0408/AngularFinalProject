import { TestBed } from '@angular/core/testing';

import { ReadingglassesService } from './readingglasses.service';

describe('ReadingglassesService', () => {
  let service: ReadingglassesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadingglassesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
