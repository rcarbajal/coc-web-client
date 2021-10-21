import { TestBed } from '@angular/core/testing';

import { ClanInfoService } from './clan-info.service';

describe('ClanInfoService', () => {
  let service: ClanInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClanInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
