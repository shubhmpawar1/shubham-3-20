import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionTailwindComponent } from './hero-section-tailwind.component';

describe('HeroSectionTailwindComponent', () => {
  let component: HeroSectionTailwindComponent;
  let fixture: ComponentFixture<HeroSectionTailwindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionTailwindComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSectionTailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
