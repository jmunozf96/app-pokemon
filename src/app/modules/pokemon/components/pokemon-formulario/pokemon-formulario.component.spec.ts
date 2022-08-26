import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFormularioComponent } from './pokemon-formulario.component';

describe('PokemonFormularioComponent', () => {
  let component: PokemonFormularioComponent;
  let fixture: ComponentFixture<PokemonFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
