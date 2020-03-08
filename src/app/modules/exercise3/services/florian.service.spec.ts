import { TestBed } from '@angular/core/testing';

import { FlorianService } from './florian.service';

describe('FlorianService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlorianService = TestBed.get(FlorianService);
    expect(service).toBeTruthy();
  });
});
