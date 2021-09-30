import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSchoolUpdateComponent } from './candidate-school-update.component';

describe('CandidateSchoolUpdateComponent', () => {
  let component: CandidateSchoolUpdateComponent;
  let fixture: ComponentFixture<CandidateSchoolUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateSchoolUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateSchoolUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
