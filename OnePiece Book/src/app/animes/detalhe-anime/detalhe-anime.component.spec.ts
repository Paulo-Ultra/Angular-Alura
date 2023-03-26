import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheAnimeComponent } from './detalhe-anime.component';

describe('DetalheAnimeComponent', () => {
  let component: DetalheAnimeComponent;
  let fixture: ComponentFixture<DetalheAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheAnimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
