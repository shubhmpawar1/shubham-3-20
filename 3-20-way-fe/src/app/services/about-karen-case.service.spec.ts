import { TestBed } from '@angular/core/testing';

import { AboutKarenCaseService } from './about-karen-case.service';

describe('AboutKarenCaseService', () => {
  let service: AboutKarenCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutKarenCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
