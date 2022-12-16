import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuesInputComponent } from './gues-input.component';

describe('GuesInputComponent', () => {
  let component: GuesInputComponent;
  let fixture: ComponentFixture<GuesInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuesInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
