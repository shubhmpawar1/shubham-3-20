import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeDockComponent } from './life-dock.component';

describe('LifeDockComponent', () => {
  let component: LifeDockComponent;
  let fixture: ComponentFixture<LifeDockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeDockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeDockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
