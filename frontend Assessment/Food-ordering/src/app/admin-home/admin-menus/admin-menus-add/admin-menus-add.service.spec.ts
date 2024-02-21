import { TestBed } from '@angular/core/testing';

import { AdminMenusAddService } from './admin-menus-add.service';

describe('AdminMenusAddService', () => {
  let service: AdminMenusAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminMenusAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
