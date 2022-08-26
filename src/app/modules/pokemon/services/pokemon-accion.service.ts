import {Injectable} from "@angular/core";
import {PokemonHttpService} from "../../../core/services/Pokemon/pokemon-http.service";
import {BehaviorSubject, map, tap} from "rxjs";
import {PokemonListado} from "../models/PokemonListado.model";

@Injectable()
export class PokemonAccionService {
  dataSoruce$: BehaviorSubject<PokemonListado[]>;

  constructor(protected pokemonHttp: PokemonHttpService) {
    this.dataSoruce$ = new BehaviorSubject<PokemonListado[]>([]);
  }

  obtenerListado() {
    return this.pokemonHttp.obtenerListadoPokemon()
      .pipe(
        map(next => next.map(src => PokemonListado.instanceNewObject(src))),
        tap(next => this.dataSoruce$.next(next))
      )
  }
}
