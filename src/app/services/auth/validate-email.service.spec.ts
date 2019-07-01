import { TestBed } from '@angular/core/testing';

import { ValidateEmailService } from './validate-email.service';

describe('ValidateEmailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidateEmailService = TestBed.get(ValidateEmailService);
    expect(service).toBeTruthy();
  });
});
