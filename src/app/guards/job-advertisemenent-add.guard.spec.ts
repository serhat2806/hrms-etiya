import { TestBed } from '@angular/core/testing';

import { JobAdvertisemenentAddGuard } from './job-advertisemenent-add.guard';

describe('JobAdvertisemenentAddGuard', () => {
  let guard: JobAdvertisemenentAddGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JobAdvertisemenentAddGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
