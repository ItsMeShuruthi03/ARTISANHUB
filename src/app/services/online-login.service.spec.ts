import { TestBed } from '@angular/core/testing';

import { OnlineLoginService } from './online-login.service';

describe('OnlineLoginService', () => {
  let service: OnlineLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
