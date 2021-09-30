import { TestBed } from '@angular/core/testing';

import { CvDetailGuard } from './cv-detail.guard';

describe('CvDetailGuard', () => {
  let guard: CvDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CvDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
