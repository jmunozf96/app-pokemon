import {Component, OnInit} from '@angular/core';
import {PokemonAccionService} from "../../services/pokemon-accion.service";
import {Pokemon} from "../../models/PokemonListado.model";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  providers: [
    PokemonAccionService
  ]
})
export class PokemonComponent implements OnInit {
  visualizarFormulario: boolean = false;
  esNuevo: boolean = true;
  pokemon: Pokemon | undefined;

  constructor(private pokemonAccion: PokemonAccionService) {
  }

  ngOnInit(): void {
    this.pokemonAccion.obtenerListado().subscribe();
  }

  get dataSoruce$() {
    return this.pokemonAccion.dataSoruce$;
  }

  searchData(termino: string) {
    this.filtrarPokemons(termino);
  }

  suggestions(termino: string) {
    this.filtrarPokemons(termino);
  }

  private filtrarPokemons(termino: string) {
    const PATTERN = termino.toLowerCase().trim();
    if (PATTERN.length > 0) {
      const dataFilter = [...this.dataSoruce$.value.filter(src => {
        return src.name.toLowerCase().trim().includes(PATTERN)
      })];
      if (dataFilter.length > 0) this.dataSoruce$.next(dataFilter);
    } else this.pokemonAccion.obtenerListado().subscribe();
  }

  nuevo() {
    this.visualizarFormulario = true;
  }

  editar(pokemon: Pokemon) {
    this.visualizarFormulario = true;
    this.esNuevo = false;
    this.pokemon = pokemon;
  }

  eliminar(pokemon: Pokemon) {
    if (confirm('¿Está seguro de relizar esta acción?')) {
      this.pokemonAccion.eliminarPokemon(pokemon)
        .subscribe(() => {
          alert('Acción realizada con éxito');
          this.pokemonAccion.obtenerListado().subscribe();
        })
    }
  }

  cancelar() {
    this.visualizarFormulario = false;
    this.esNuevo = true;
    this.pokemon = undefined;
  }

  obtenerPokemon(pokemon: Pokemon) {
    if (pokemon.name == '' || pokemon.image == '') {
      alert('Error al intentar guardar el registro!!!');
      throw new Error('No puede realizar esta acción');
    }
    let accion = this.pokemonAccion.guardarPokemon(pokemon);
    if (!this.esNuevo) accion = this.pokemonAccion.actualizarPokemon(pokemon);
    accion.subscribe(() => {
      alert('Acción realizada con éxito');
      this.cancelar();
      this.pokemonAccion.obtenerListado().subscribe();
    });
  }
}
