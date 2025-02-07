/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DemocompComponent } from './democomp.component';

describe('DemocompComponent', () => {
  let component: DemocompComponent;
  let fixture: ComponentFixture<DemocompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemocompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
