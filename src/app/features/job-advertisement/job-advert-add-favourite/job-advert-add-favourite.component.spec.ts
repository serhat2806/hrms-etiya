import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAdvertAddFavouriteComponent } from './job-advert-add-favourite.component';

describe('JobAdvertAddFavouriteComponent', () => {
  let component: JobAdvertAddFavouriteComponent;
  let fixture: ComponentFixture<JobAdvertAddFavouriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAdvertAddFavouriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAdvertAddFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
