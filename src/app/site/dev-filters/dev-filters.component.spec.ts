import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevFiltersComponent } from './dev-filters.component';

describe('DevFiltersComponent', () => {
  let component: DevFiltersComponent;
  let fixture: ComponentFixture<DevFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
