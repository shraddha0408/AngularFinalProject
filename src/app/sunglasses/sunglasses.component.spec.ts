import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunglassesComponent } from './sunglasses.component';

describe('SunglassesComponent', () => {
  let component: SunglassesComponent;
  let fixture: ComponentFixture<SunglassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunglassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunglassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
