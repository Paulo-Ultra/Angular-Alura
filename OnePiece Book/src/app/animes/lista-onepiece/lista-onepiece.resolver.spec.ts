import { TestBed } from '@angular/core/testing';

import { ListaOnepieceResolver } from './lista-onepiece.resolver';

describe('ListaOnepieceResolver', () => {
  let resolver: ListaOnepieceResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ListaOnepieceResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
