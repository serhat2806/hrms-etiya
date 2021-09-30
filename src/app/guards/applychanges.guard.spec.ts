import { TestBed } from '@angular/core/testing';

import { ApplychangesGuard } from './applychanges.guard';

describe('ApplychangesGuard', () => {
  let guard: ApplychangesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ApplychangesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
