import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuesRowComponent } from './gues-row.component';

describe('GuesRowComponent', () => {
  let component: GuesRowComponent;
  let fixture: ComponentFixture<GuesRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuesRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuesRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
