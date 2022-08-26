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
    console.log(termino)
  }

  suggestions(termino: string) {
    console.log(termino)
  }

  nuevo() {
    this.visualizarFormulario = true;
  }

  editar(pokemon: Pokemon) {
    this.visualizarFormulario = true;
    this.esNuevo = false;
    this.pokemon = pokemon;
  }

  obtenerPokemon(pokemon: Pokemon) {
    console.log(pokemon)
  }
}
