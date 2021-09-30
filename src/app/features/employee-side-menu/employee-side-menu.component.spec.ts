import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSideMenuComponent } from './employee-side-menu.component';

describe('EmployeeSideMenuComponent', () => {
  let component: EmployeeSideMenuComponent;
  let fixture: ComponentFixture<EmployeeSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSideMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
