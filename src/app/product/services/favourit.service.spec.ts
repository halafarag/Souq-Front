import { TestBed } from '@angular/core/testing';

import { FavouritService } from './favourit.service';

describe('FavouritService', () => {
  let service: FavouritService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouritService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
