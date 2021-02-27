import { TestBed } from '@angular/core/testing';

import { SubjectDataService } from './subject-data.service';

describe('SubjectDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubjectDataService = TestBed.get(SubjectDataService);
    expect(service).toBeTruthy();
  });
});
