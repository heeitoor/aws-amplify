import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleThreeComponent } from './people-three.component';

describe('PeopleThreeComponent', () => {
  let component: PeopleThreeComponent;
  let fixture: ComponentFixture<PeopleThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
