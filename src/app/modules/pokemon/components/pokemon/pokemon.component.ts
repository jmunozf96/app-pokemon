import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IPokemonListado} from "../../interfaces/pokemon-listado.interface";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  dataSoruce$: BehaviorSubject<IPokemonListado[]>;

  constructor() {
    this.dataSoruce$ = new BehaviorSubject<IPokemonListado[]>([]);
  }

  ngOnInit(): void {
  }

}
