import { TestBed } from '@angular/core/testing';

import { NewFooterService } from './new-footer.service';

describe('NewFooterService', () => {
  let service: NewFooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewFooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
