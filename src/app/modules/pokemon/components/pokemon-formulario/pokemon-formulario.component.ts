import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Pokemon} from "../../models/PokemonListado.model";

@Component({
  selector: 'app-pokemon-formulario',
  templateUrl: './pokemon-formulario.component.html',
  styleUrls: ['./pokemon-formulario.component.scss']
})
export class PokemonFormularioComponent implements OnInit, OnDestroy {
  @Input() pokemon: Pokemon | undefined;

  @Input() set isSave(value: boolean) {
    this.title = (value && !this.pokemon) ? `Nuevo Pokemon` : `Editar ${this.pokemon?.name}`
    this.nuevo = value;
  };

  @Output() changePokemon: EventEmitter<Pokemon>;

  title: string = '';
  nuevo: boolean = true;

  constructor() {
    this.changePokemon = new EventEmitter<Pokemon>();
  }

  ngOnInit(): void {
    if (this.nuevo) {
      this.pokemon = new Pokemon();
    }
  }

  procesarPokemon() {
    this.changePokemon.emit(this.pokemon);
  }

  ngOnDestroy() {
    this.changePokemon.complete();
  }
}
