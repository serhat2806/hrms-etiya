import { TestBed } from '@angular/core/testing';

import { EmployerAdvertListGuard } from './employer-advert-list.guard';

describe('EmployerAdvertListGuard', () => {
  let guard: EmployerAdvertListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmployerAdvertListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
