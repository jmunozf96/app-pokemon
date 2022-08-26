import {Injectable} from "@angular/core";
import {BaseHttpService} from "../Base/base-http.service";
import {HttpParams} from "@angular/common/http";
import {IPokemonListado} from "../../../modules/pokemon/interfaces/pokemon-listado.interface";

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
    return this.http.get<IPokemonListado[]>(url, {params});
  }

}
