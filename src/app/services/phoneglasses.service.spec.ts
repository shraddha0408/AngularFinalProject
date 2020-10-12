import { TestBed } from '@angular/core/testing';

import { PhoneglassesService } from './phoneglasses.service';

describe('PhoneglassesService', () => {
  let service: PhoneglassesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneglassesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
