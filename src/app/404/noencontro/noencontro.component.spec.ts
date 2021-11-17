import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoencontroComponent } from './noencontro.component';

describe('NoencontroComponent', () => {
  let component: NoencontroComponent;
  let fixture: ComponentFixture<NoencontroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoencontroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoencontroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
