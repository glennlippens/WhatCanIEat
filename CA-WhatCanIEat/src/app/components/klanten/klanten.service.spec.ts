import { TestBed, inject } from '@angular/core/testing';

import { KlantenService } from './klanten.service';

describe('KlantenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KlantenService]
    });
  });

  it('should be created', inject([KlantenService], (service: KlantenService) => {
    expect(service).toBeTruthy();
  }));
});
