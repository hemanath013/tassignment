import { TestBed } from '@angular/core/testing';

import { AdminMenusService } from './admin-menus.service';

describe('AdminMenusService', () => {
  let service: AdminMenusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminMenusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
