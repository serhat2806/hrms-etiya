import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateExperienceDeleteComponent } from './candidate-experience-delete.component';

describe('CandidateExperienceDeleteComponent', () => {
  let component: CandidateExperienceDeleteComponent;
  let fixture: ComponentFixture<CandidateExperienceDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateExperienceDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateExperienceDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
