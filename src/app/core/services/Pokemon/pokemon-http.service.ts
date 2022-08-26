import {Injectable} from "@angular/core";
import {BaseHttpService} from "../Base/base-http.service";
import {HttpParams} from "@angular/common/http";
import {IPokemon} from "../../../modules/pokemon/interfaces/pokemon-listado.interface";

@Injectable({
  providedIn: 'root'
})
export class PokemonHttpService extends BaseHttpService {

  override get servicio(): string {
    return `${this.url}`;
  }

  obtenerListadoPokemon() {
    const params = new HttpParams()
      .set('idAuthor', 1);
    const url = `${this.servicio}`;
    return this.http.get<IPokemon[]>(url, {params});
  }

  guardarPokemon(pokemon: IPokemon) {
    const params = new HttpParams()
      .set('idAuthor', 1);
    const url = `${this.servicio}`;
    return this.http.post<IPokemon>(url, pokemon, {params});
  }

  actualizarPokemon(pokemon: IPokemon) {
    const params = new HttpParams()
      .set('idAuthor', 1);
    const url = `${this.servicio}/${pokemon.id}`;
    return this.http.put<IPokemon>(url, pokemon, {params});
  }

  eliminarPokemon(id: number) {
    const params = new HttpParams()
      .set('idAuthor', 1);
    const url = `${this.servicio}/${id}`;
    return this.http.delete<void>(url, {params});
  }

}
