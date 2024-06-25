import { TestBed } from '@angular/core/testing';

import { EventosAService } from './eventos-a.service';

describe('EventosAService', () => {
  let service: EventosAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventosAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
