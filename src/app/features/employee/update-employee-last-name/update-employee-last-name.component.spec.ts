import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeLastNameComponent } from './update-employee-last-name.component';

describe('UpdateEmployeeLastNameComponent', () => {
  let component: UpdateEmployeeLastNameComponent;
  let fixture: ComponentFixture<UpdateEmployeeLastNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeLastNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeLastNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
