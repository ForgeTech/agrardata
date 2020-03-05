import { TestBed } from '@angular/core/testing';

import { SerwasService } from './serwas.service';

describe('SerwasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SerwasService = TestBed.get(SerwasService);
    expect(service).toBeTruthy();
  });
});
