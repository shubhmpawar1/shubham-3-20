import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeGiveComponent } from './what-we-give.component';

describe('WhatWeGiveComponent', () => {
  let component: WhatWeGiveComponent;
  let fixture: ComponentFixture<WhatWeGiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatWeGiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatWeGiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
