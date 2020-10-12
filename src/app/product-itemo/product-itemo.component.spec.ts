import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemoComponent } from './product-itemo.component';

describe('ProductItemoComponent', () => {
  let component: ProductItemoComponent;
  let fixture: ComponentFixture<ProductItemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
