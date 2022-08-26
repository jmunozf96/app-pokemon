import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListadoComponent } from './pokemon-listado.component';

describe('PokemonListadoComponent', () => {
  let component: PokemonListadoComponent;
  let fixture: ComponentFixture<PokemonListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
