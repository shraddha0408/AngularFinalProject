import { TestBed } from '@angular/core/testing';

import { EyeglassesService } from './eyeglasses.service';

describe('EyeglassesService', () => {
  let service: EyeglassesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EyeglassesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
