import { TestBed, inject } from '@angular/core/testing';

import { BackendUsuarioService } from './backend-usuario.service';

describe('BackendUsuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendUsuarioService]
    });
  });

  it('should be created', inject([BackendUsuarioService], (service: BackendUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
