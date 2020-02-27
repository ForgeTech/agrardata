import { TestBed } from '@angular/core/testing';

import { SharedService3Service } from './shared-service3.service';

describe('SharedService3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedService3Service = TestBed.get(SharedService3Service);
    expect(service).toBeTruthy();
  });
});
