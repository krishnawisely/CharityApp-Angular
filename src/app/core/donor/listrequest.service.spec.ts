import { TestBed } from '@angular/core/testing';

import { ListrequestService } from './listrequest.service';

describe('ListrequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListrequestService = TestBed.get(ListrequestService);
    expect(service).toBeTruthy();
  });
});
