import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCvTitleComponent } from './update-cv-title.component';

describe('UpdateCvTitleComponent', () => {
  let component: UpdateCvTitleComponent;
  let fixture: ComponentFixture<UpdateCvTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCvTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCvTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
