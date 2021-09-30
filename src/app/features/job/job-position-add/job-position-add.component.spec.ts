import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPositionAddComponent } from './job-position-add.component';

describe('JobPositionAddComponent', () => {
  let component: JobPositionAddComponent;
  let fixture: ComponentFixture<JobPositionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPositionAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPositionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
