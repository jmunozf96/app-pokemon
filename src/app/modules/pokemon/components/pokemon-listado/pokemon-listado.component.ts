import {Component, OnInit} from '@angular/core';
import {TableColumns} from "../../../../core/interfaces/general.interface";
import {ConfigTablePokemonListado} from "../../models/PokemonListado.model";

@Component({
  selector: 'app-pokemon-listado',
  templateUrl: './pokemon-listado.component.html',
  styleUrls: ['./pokemon-listado.component.scss']
})
export class PokemonListadoComponent implements OnInit {
  columnas: TableColumns[];

  constructor() {
    this.columnas = ConfigTablePokemonListado.getColumns();
  }

  ngOnInit(): void {
  }

}
