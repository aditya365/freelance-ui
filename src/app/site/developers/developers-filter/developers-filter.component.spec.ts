import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopersFilterComponent } from './developers-filter.component';

describe('DevelopersFilterComponent', () => {
  let component: DevelopersFilterComponent;
  let fixture: ComponentFixture<DevelopersFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopersFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopersFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
