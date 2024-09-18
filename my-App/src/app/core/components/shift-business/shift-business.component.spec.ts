import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftBusinessComponent } from './shift-business.component';

describe('ShiftBusinessComponent', () => {
  let component: ShiftBusinessComponent;
  let fixture: ComponentFixture<ShiftBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftBusinessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
