import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartThreeComponent } from './cart-three.component';

describe('CartThreeComponent', () => {
  let component: CartThreeComponent;
  let fixture: ComponentFixture<CartThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
