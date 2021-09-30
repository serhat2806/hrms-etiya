import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSchoolComponent } from './candidate-school.component';

describe('CandidateSchoolComponent', () => {
  let component: CandidateSchoolComponent;
  let fixture: ComponentFixture<CandidateSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateSchoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
