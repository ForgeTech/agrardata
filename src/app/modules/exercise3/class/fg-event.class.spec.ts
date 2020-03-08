import { FgEvent } from './fg-event.class';

describe('FgEventClass', () => {
  let fgEvent: FgEvent;
  beforeEach(function() {
    fgEvent = new FgEvent(this, 'TestActionEvent');
  });
  describe('Constructor', () => {
    it('creates class successfully', () => {
      expect( fgEvent ).toBeTruthy();
    });
    it('has property \'signature\'', () => {
      expect( fgEvent.signature ).toBeTruthy();
    });
    it('has property \'dispatcher\'', () => {
      expect( fgEvent.dispatcher ).toBeTruthy();
    });
    it('has property \'data\'', () => {
      expect( fgEvent.data ).toBeTruthy();
    });
  });
});
