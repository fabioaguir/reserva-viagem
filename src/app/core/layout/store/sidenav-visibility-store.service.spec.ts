import { TestBed } from '@angular/core/testing';

import { SidenavVisibilityStoreService } from './sidenav-visibility-store.service';

describe('SidenavVisibilityStoreService', () => {
  let service: SidenavVisibilityStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidenavVisibilityStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
