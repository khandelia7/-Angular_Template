import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepart1Component } from './homepart1.component';

describe('Homepart1Component', () => {
  let component: Homepart1Component;
  let fixture: ComponentFixture<Homepart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homepart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homepart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
