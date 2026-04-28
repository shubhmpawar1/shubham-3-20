import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutKarenCaseComponent } from './about-karen-case.component';

describe('AboutKarenCaseComponent', () => {
  let component: AboutKarenCaseComponent;
  let fixture: ComponentFixture<AboutKarenCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutKarenCaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutKarenCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
