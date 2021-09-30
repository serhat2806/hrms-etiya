import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAdvertVerifyComponent } from './job-advert-verify.component';

describe('JobAdvertVerifyComponent', () => {
  let component: JobAdvertVerifyComponent;
  let fixture: ComponentFixture<JobAdvertVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAdvertVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAdvertVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
