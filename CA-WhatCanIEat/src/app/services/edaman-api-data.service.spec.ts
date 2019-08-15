import { TestBed, inject } from '@angular/core/testing';

import { EdamanApiDataService } from './edaman-api-data.service';

describe('EdamanApiDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EdamanApiDataService]
    });
  });

  it('should be created', inject([EdamanApiDataService], (service: EdamanApiDataService) => {
    expect(service).toBeTruthy();
  }));
});
