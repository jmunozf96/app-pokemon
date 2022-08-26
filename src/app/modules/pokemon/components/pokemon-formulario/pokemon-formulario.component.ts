import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {Pokemon} from "../../models/PokemonListado.model";

@Component({
  selector: 'app-pokemon-formulario',
  templateUrl: './pokemon-formulario.component.html',
  styleUrls: ['./pokemon-formulario.component.scss']
})
export class PokemonFormularioComponent implements OnInit, OnDestroy, OnChanges {
  @Input() pokemon: Pokemon | undefined;

  @Input() set isSave(value: boolean) {
    this.title = (value && !this.pokemon) ? `Nuevo Pokemon` : '';
    this.nuevo = value;
  };

  @Output() changePokemon: EventEmitter<Pokemon>;
  @Output() cancelar: EventEmitter<void>;

  title: string = '';
  nuevo: boolean = true;

  constructor() {
    this.changePokemon = new EventEmitter<Pokemon>();
    this.cancelar = new EventEmitter<void>();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.pokemon && !this.nuevo) {
      this.title = `Editar Pokemon (${this.pokemon.name})`
    }
  }

  ngOnInit(): void {
    if (this.nuevo) {
      this.pokemon = new Pokemon();
    } else this.pokemon = Pokemon.instanceNewObject(this.pokemon);
  }

  procesarPokemon() {
    this.changePokemon.emit(this.pokemon);
  }

  cancelarProceso() {
    this.cancelar.emit();
  }

  ngOnDestroy() {
    this.changePokemon.complete();
    this.cancelar.complete();
  }
}
