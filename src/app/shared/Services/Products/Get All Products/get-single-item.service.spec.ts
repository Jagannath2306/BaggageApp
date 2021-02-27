import { TestBed } from '@angular/core/testing';

import { GetSingleItemService } from './get-single-item.service';

describe('GetSingleItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetSingleItemService = TestBed.get(GetSingleItemService);
    expect(service).toBeTruthy();
  });
});
