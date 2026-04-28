import { ComponentFixture, TestBed } from '@angular/core/testing';

import { The320Component } from './the-3-20.component';

describe('The320Component', () => {
  let component: The320Component;
  let fixture: ComponentFixture<The320Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [The320Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(The320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
