import { TestBed } from '@angular/core/testing';

import { WineDataHandlerService } from './wine-datahandler.service';

describe('WineDatahandlerService', () => {
  let service: WineDataHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WineDataHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
