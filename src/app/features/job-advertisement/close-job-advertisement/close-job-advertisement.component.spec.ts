import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseJobAdvertisementComponent } from './close-job-advertisement.component';

describe('CloseJobAdvertisementComponent', () => {
  let component: CloseJobAdvertisementComponent;
  let fixture: ComponentFixture<CloseJobAdvertisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseJobAdvertisementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseJobAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
