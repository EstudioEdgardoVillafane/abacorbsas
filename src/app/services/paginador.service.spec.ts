import { TestBed, inject } from '@angular/core/testing';

import { PaginadorService } from './paginador.service';

describe('PaginadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaginadorService]
    });
  });

  it('should be created', inject([PaginadorService], (service: PaginadorService) => {
    expect(service).toBeTruthy();
  }));
});
