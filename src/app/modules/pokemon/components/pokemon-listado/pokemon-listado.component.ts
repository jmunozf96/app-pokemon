import {Component, Input, OnInit} from '@angular/core';
import {TableColumns} from "../../../../core/interfaces/general.interface";
import {ConfigTablePokemonListado, Pokemon} from "../../models/PokemonListado.model";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-pokemon-listado[data]',
  templateUrl: './pokemon-listado.component.html',
  styleUrls: ['./pokemon-listado.component.scss']
})
export class PokemonListadoComponent implements OnInit {
  @Input('data') dataSoruce$: BehaviorSubject<Pokemon[]>;
  columnas: TableColumns[];

  constructor() {
    this.columnas = ConfigTablePokemonListado.getColumns();
    this.dataSoruce$ = new BehaviorSubject<Pokemon[]>([]);
  }

  ngOnInit(): void {
  }

}
