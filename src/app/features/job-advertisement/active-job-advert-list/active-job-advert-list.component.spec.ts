import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveJobAdvertListComponent } from './active-job-advert-list.component';

describe('ActiveJobAdvertListComponent', () => {
  let component: ActiveJobAdvertListComponent;
  let fixture: ComponentFixture<ActiveJobAdvertListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveJobAdvertListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveJobAdvertListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
