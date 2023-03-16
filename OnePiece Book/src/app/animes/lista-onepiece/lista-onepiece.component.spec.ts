import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOnepieceComponent } from './lista-onepiece.component';

describe('ListaOnepieceComponent', () => {
  let component: ListaOnepieceComponent;
  let fixture: ComponentFixture<ListaOnepieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaOnepieceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaOnepieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
