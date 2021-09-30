import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerAdvertComponent } from './employer-advert.component';

describe('EmployerAdvertComponent', () => {
  let component: EmployerAdvertComponent;
  let fixture: ComponentFixture<EmployerAdvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerAdvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
