import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateLanguageComponent } from './candidate-language.component';

describe('CandidateLanguageComponent', () => {
  let component: CandidateLanguageComponent;
  let fixture: ComponentFixture<CandidateLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateLanguageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
