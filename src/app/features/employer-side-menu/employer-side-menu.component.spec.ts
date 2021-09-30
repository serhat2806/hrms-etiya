import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerSideMenuComponent } from './employer-side-menu.component';

describe('EmployerSideMenuComponent', () => {
  let component: EmployerSideMenuComponent;
  let fixture: ComponentFixture<EmployerSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerSideMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
