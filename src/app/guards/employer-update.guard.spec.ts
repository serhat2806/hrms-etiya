import { TestBed } from '@angular/core/testing';

import { EmployerUpdateGuard } from './employer-update.guard';

describe('EmployerUpdateGuard', () => {
  let guard: EmployerUpdateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmployerUpdateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
