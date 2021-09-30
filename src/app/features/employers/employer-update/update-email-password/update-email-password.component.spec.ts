import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmailPasswordComponent } from './update-email-password.component';

describe('UpdateEmailPasswordComponent', () => {
  let component: UpdateEmailPasswordComponent;
  let fixture: ComponentFixture<UpdateEmailPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmailPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmailPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
