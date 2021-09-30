import { TestBed } from '@angular/core/testing';

import { CandidateListGuard } from './candidate-list.guard';

describe('CandidateListGuard', () => {
  let guard: CandidateListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandidateListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
