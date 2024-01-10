import { TestBed } from '@angular/core/testing';

import { AzureStorageService } from './azure-storage-service.service';

describe('AzureStorageServiceService', () => {
  let service: AzureStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzureStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
