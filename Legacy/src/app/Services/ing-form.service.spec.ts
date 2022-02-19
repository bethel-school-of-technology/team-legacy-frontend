import { TestBed } from '@angular/core/testing';

import { IngFormService } from './ing-form.service';

describe('IngFormService', () => {
  let service: IngFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
