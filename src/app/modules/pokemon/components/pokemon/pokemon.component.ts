import {Component, OnInit} from '@angular/core';
import {PokemonAccionService} from "../../services/pokemon-accion.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  providers: [
    PokemonAccionService
  ]
})
export class PokemonComponent implements OnInit {

  constructor(private pokemonAccion: PokemonAccionService) {
  }

  ngOnInit(): void {
    this.pokemonAccion.obtenerListado().subscribe();
  }

  get dataSoruce$() {
    return this.pokemonAccion.dataSoruce$;
  }
}
