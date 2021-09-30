import { TestBed } from '@angular/core/testing';

import { EmployeeProfileGuard } from './employee-profile.guard';

describe('EmployeeProfileGuard', () => {
  let guard: EmployeeProfileGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmployeeProfileGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
