import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopersItemComponent } from './developers-item.component';

describe('DevelopersItemComponent', () => {
  let component: DevelopersItemComponent;
  let fixture: ComponentFixture<DevelopersItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopersItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
