import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorLogicComponent } from './calculator-logic.component';

describe('CalculatorLogicComponent', () => {
  let component: CalculatorLogicComponent;
  let fixture: ComponentFixture<CalculatorLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorLogicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
