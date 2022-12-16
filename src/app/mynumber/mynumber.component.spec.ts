import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MynumberComponent } from './mynumber.component';

describe('MynumberComponent', () => {
  let component: MynumberComponent;
  let fixture: ComponentFixture<MynumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MynumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MynumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
