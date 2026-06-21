import { TestBed } from '@angular/core/testing';

import { MobileLayoutService } from './mobile-layout.service';

describe('MobileLayoutService', () => {
  let service: MobileLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
