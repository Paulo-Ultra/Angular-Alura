import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeFotosOnepieceComponent } from './grade-fotos-onepiece.component';

describe('GradeFotosOnepieceComponent', () => {
  let component: GradeFotosOnepieceComponent;
  let fixture: ComponentFixture<GradeFotosOnepieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeFotosOnepieceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeFotosOnepieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
