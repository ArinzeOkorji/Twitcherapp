import { TestBed } from '@angular/core/testing';

import { TwitcherService } from './twitcher.service';

describe('TwitcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwitcherService = TestBed.get(TwitcherService);
    expect(service).toBeTruthy();
  });
});
