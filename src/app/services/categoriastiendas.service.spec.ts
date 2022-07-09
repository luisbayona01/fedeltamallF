import { TestBed } from '@angular/core/testing';

import { CategoriastiendasService } from './categoriastiendas.service';

describe('CategoriastiendasService', () => {
  let service: CategoriastiendasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriastiendasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
