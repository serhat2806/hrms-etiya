import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyChangesComponent } from './apply-changes.component';

describe('ApplyChangesComponent', () => {
  let component: ApplyChangesComponent;
  let fixture: ComponentFixture<ApplyChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyChangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
