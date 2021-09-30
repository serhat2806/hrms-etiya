import { TestBed } from '@angular/core/testing';

import { CloseJobAdvertGuard } from './close-job-advert.guard';

describe('CloseJobAdvertGuard', () => {
  let guard: CloseJobAdvertGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CloseJobAdvertGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
