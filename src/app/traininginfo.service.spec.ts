import { TestBed } from '@angular/core/testing';

import { TraininginfoService } from './traininginfo.service';

describe('TraininginfoService', () => {
  let service: TraininginfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraininginfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
