import { TestBed } from '@angular/core/testing';

import { JobAdvertisementService } from './job-advertisement.service';

describe('JobAdvertisementServiceService', () => {
  let service: JobAdvertisementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobAdvertisementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
