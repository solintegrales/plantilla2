import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavlComponent } from './navl.component';

describe('NavlComponent', () => {
  let component: NavlComponent;
  let fixture: ComponentFixture<NavlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
