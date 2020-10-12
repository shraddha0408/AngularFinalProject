import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineexclusiveComponent } from './onlineexclusive.component';

describe('OnlineexclusiveComponent', () => {
  let component: OnlineexclusiveComponent;
  let fixture: ComponentFixture<OnlineexclusiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineexclusiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineexclusiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
