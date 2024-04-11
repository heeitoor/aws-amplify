import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTwoComponent } from './cart-two.component';

describe('CartTwoComponent', () => {
  let component: CartTwoComponent;
  let fixture: ComponentFixture<CartTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
