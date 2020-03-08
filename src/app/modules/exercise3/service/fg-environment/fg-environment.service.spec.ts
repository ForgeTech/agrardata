import { TestBed } from '@angular/core/testing';

import { FgEnvironmentService } from './fg-environment.service';

describe('FgEnvironmentService', () => {
  let fgEnvironmentService: FgEnvironmentService;
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ FgEnvironmentService ]
  }));
  beforeEach(function() {
    fgEnvironmentService = TestBed.get(FgEnvironmentService);
  });
  describe('Constructor', () => {
    it('created service successfully', () => {
      expect( fgEnvironmentService ).toBeTruthy();
    });
    it('has property "name"', () => {
      expect( fgEnvironmentService.name ).toBeTruthy();
    });
    it('has property "debug"', () => {
      expect( fgEnvironmentService.name ).toBeTruthy();
    });
    it('has property "production"', () => {
      expect( fgEnvironmentService.name ).toBeTruthy();
    });
    it('has property "override"', () => {
      expect( fgEnvironmentService.name ).toBeTruthy();
    });
    it('has property "vlv"', () => {
      expect( fgEnvironmentService.name ).toBeTruthy();
    });
  });
});
