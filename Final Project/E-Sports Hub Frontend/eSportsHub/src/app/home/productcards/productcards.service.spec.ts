import { TestBed } from '@angular/core/testing';

import { ProductcardsService } from './productcards.service';

describe('ProductcardsService', () => {
  let service: ProductcardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductcardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
