/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewcompComponent } from './newcomp.component';

describe('NewcompComponent', () => {
  let component: NewcompComponent;
  let fixture: ComponentFixture<NewcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
