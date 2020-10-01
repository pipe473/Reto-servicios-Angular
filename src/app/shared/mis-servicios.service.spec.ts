import { TestBed } from '@angular/core/testing';

import { MisServiciosService } from './mis-servicios.service';

describe('MisServiciosService', () => {
  let service: MisServiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisServiciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
