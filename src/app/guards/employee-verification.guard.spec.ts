import { TestBed } from '@angular/core/testing';

import { EmployeeVerificationGuard } from './employee-verification.guard';

describe('EmployeeVerificationGuard', () => {
  let guard: EmployeeVerificationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmployeeVerificationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
