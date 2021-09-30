import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCvLetterComponent } from './update-cv-letter.component';

describe('UpdateCvLetterComponent', () => {
  let component: UpdateCvLetterComponent;
  let fixture: ComponentFixture<UpdateCvLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCvLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCvLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
