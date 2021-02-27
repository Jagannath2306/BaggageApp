import { TestBed } from '@angular/core/testing';

import { AddtoCartService } from './addto-cart.service';

describe('AddtoCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddtoCartService = TestBed.get(AddtoCartService);
    expect(service).toBeTruthy();
  });
});
