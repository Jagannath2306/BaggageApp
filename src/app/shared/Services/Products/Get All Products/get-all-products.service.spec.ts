import { TestBed } from '@angular/core/testing';

import { GetAllProductsService } from './get-all-products.service';

describe('GetAllProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAllProductsService = TestBed.get(GetAllProductsService);
    expect(service).toBeTruthy();
  });
});
