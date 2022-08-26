import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {TableColumns} from "../../../../core/interfaces/general.interface";
import {ConfigTablePokemonListado, Pokemon} from "../../models/PokemonListado.model";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-pokemon-listado[data]',
  templateUrl: './pokemon-listado.component.html',
  styleUrls: ['./pokemon-listado.component.scss']
})
export class PokemonListadoComponent implements OnInit, OnDestroy {
  @Input('data') dataSoruce$: BehaviorSubject<Pokemon[]>;
  columnas: TableColumns[];

  @Output() editarPokemon: EventEmitter<Pokemon>;
  @Output() eliminarPokemon: EventEmitter<Pokemon>;

  constructor() {
    this.columnas = ConfigTablePokemonListado.getColumns();
    this.dataSoruce$ = new BehaviorSubject<Pokemon[]>([]);
    this.editarPokemon = new EventEmitter<Pokemon>();
    this.eliminarPokemon = new EventEmitter<Pokemon>();
  }

  ngOnInit(): void {
  }

  onEdit(pokemon: Pokemon) {
    this.editarPokemon.emit(pokemon);
  }

  onDelete(pokemon: Pokemon) {
    this.eliminarPokemon.emit(pokemon);
  }

  ngOnDestroy() {
    this.editarPokemon.complete();
    this.eliminarPokemon.complete();
  }

}
