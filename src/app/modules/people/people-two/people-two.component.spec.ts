import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleTwoComponent } from './people-two.component';

describe('PeopleTwoComponent', () => {
  let component: PeopleTwoComponent;
  let fixture: ComponentFixture<PeopleTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
