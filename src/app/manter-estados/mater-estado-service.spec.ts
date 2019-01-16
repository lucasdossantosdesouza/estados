import { TestBed } from '@angular/core/testing';

import { MaterEstadoService } from './mater-estado.service';

describe('MaterEstadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaterEstadoService = TestBed.get(MaterEstadoService);
    expect(service).toBeTruthy();
  });
}); 
