import { TestBed } from '@angular/core/testing';

import { FgDateTimeService } from './fg-date-time.service';

describe('FgDateTimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FgDateTimeService = TestBed.get(FgDateTimeService);
    expect(service).toBeTruthy();
  });
});
