import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Movements2Component } from './movements-2.component';

describe('Movements2Component', () => {
  let component: Movements2Component;
  let fixture: ComponentFixture<Movements2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Movements2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Movements2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
