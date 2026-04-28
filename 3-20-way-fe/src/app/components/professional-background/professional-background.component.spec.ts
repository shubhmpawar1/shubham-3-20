import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalBackgroundComponent } from './professional-background.component';

describe('ProfessionalBackgroundComponent', () => {
  let component: ProfessionalBackgroundComponent;
  let fixture: ComponentFixture<ProfessionalBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
