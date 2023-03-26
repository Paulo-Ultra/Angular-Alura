import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoAnimeComponent } from './novo-anime.component';

describe('NovoAnimeComponent', () => {
  let component: NovoAnimeComponent;
  let fixture: ComponentFixture<NovoAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoAnimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
