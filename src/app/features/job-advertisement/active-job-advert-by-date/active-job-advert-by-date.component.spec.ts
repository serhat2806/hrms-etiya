import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveJobAdvertByDateComponent } from './active-job-advert-by-date.component';

describe('ActiveJobAdvertByDateComponent', () => {
  let component: ActiveJobAdvertByDateComponent;
  let fixture: ComponentFixture<ActiveJobAdvertByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveJobAdvertByDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveJobAdvertByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
