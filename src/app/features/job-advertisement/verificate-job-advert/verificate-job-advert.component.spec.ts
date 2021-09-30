import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificateJobAdvertComponent } from './verificate-job-advert.component';

describe('VerificateJobAdvertComponent', () => {
  let component: VerificateJobAdvertComponent;
  let fixture: ComponentFixture<VerificateJobAdvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificateJobAdvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificateJobAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
