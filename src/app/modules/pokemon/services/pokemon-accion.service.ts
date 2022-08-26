import {Injectable} from "@angular/core";
import {PokemonHttpService} from "../../../core/services/Pokemon/pokemon-http.service";
import {BehaviorSubject, map, tap} from "rxjs";
import {Pokemon} from "../models/PokemonListado.model";

@Injectable()
export class PokemonAccionService {
  dataSoruce$: BehaviorSubject<Pokemon[]>;

  constructor(protected pokemonHttp: PokemonHttpService) {
    this.dataSoruce$ = new BehaviorSubject<Pokemon[]>([]);
  }

  obtenerListado() {
    return this.pokemonHttp.obtenerListadoPokemon()
      .pipe(
        map(next => next.map(src => Pokemon.instanceNewObject(src))),
        tap(next => this.dataSoruce$.next(next))
      )
  }
}
