import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyWinsComponent } from './daily-wins.component';

describe('DailyWinsComponent', () => {
  let component: DailyWinsComponent;
  let fixture: ComponentFixture<DailyWinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyWinsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyWinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
