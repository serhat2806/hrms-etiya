import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSignComponent } from './candidate-sign.component';

describe('CandidateSignComponent', () => {
  let component: CandidateSignComponent;
  let fixture: ComponentFixture<CandidateSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateSignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
