import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCtaComponent } from './new-cta.component';

describe('NewCtaComponent', () => {
  let component: NewCtaComponent;
  let fixture: ComponentFixture<NewCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCtaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
