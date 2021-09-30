import { TestBed } from '@angular/core/testing';

import { FavAdvertAddGuard } from './fav-advert-add.guard';

describe('FavAdvertAddGuard', () => {
  let guard: FavAdvertAddGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FavAdvertAddGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
