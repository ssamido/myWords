import { TestBed } from '@angular/core/testing';

import { WordServicesService } from './word-services.service';

describe('WordServicesService', () => {
  let service: WordServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
