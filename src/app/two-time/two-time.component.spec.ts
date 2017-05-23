/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TwoTimeComponent } from './two-time.component';

describe('TwoTimeComponent', () => {
  let component: TwoTimeComponent;
  let fixture: ComponentFixture<TwoTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
