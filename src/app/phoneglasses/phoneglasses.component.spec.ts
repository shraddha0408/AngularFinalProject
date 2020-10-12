import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { from } from 'rxjs';

import {PhoneglassesComponent} from './phoneglasses.component';
describe('PhoneglassesComponent', () => {
  let component: PhoneglassesComponent;
  let fixture: ComponentFixture<PhoneglassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneglassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneglassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
