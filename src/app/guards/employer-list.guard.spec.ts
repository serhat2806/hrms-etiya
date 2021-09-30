import { TestBed } from '@angular/core/testing';

import { EmployerListGuard } from './employer-list.guard';

describe('EmployerListGuard', () => {
  let guard: EmployerListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmployerListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
