import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepart2Component } from './homepart2.component';

describe('Homepart2Component', () => {
  let component: Homepart2Component;
  let fixture: ComponentFixture<Homepart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homepart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homepart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
