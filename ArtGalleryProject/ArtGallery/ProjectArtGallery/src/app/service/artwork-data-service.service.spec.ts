import { TestBed } from '@angular/core/testing';

import { ArtworkDataServiceService } from './artwork-data-service.service';

describe('ArtworkDataServiceService', () => {
  let service: ArtworkDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtworkDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
