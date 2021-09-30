import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivJobAdvertByEmployerComponent } from './activ-job-advert-by-employer.component';

describe('ActivJobAdvertByEmployerComponent', () => {
  let component: ActivJobAdvertByEmployerComponent;
  let fixture: ComponentFixture<ActivJobAdvertByEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivJobAdvertByEmployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivJobAdvertByEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
