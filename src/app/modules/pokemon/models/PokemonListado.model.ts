import {IPokemon} from "../interfaces/pokemon-listado.interface";
import {uuiv4} from "../../../core/helpers/functions.helper";
import {TableColumns} from "../../../core/interfaces/general.interface";

export class Pokemon implements IPokemon {
  declare id: number;
  declare uuid: string;
  name: string;
  image: string;
  declare attack: number;
  declare defense: number;
  declare hp: number;
  declare type: string;
  declare idAuthor: number;

  static instanceNewObject(data: any) {
    const pokemonListado = new Pokemon();
    pokemonListado.id = data['id'] ?? pokemonListado.id;
    pokemonListado.uuid = data['uuid'] ?? pokemonListado.uuid;
    pokemonListado.name = data['name'] ?? pokemonListado.name;
    pokemonListado.image = data['image'] ?? pokemonListado.image;
    pokemonListado.attack = data['attack'] ?? pokemonListado.attack;
    pokemonListado.defense = data['defense'] ?? pokemonListado.defense;
    pokemonListado.hp = data['hp'] ?? pokemonListado.hp;
    pokemonListado.type = data['type'] ?? pokemonListado.type;
    pokemonListado.idAuthor = data['id_author'] ?? data['idAuthor'] ?? pokemonListado.idAuthor;
    return pokemonListado;
  }

  constructor() {
    this.uuid = uuiv4();
    this.name = '';
    this.image = '';
    this.attack = 0;
    this.defense = 0;
    this.hp = 0;
    this.idAuthor = 1;
    this.type = "Desconocido";
  }
}

export const ConfigTablePokemonListado = Object.freeze({
  getColumns(): TableColumns[] {
    return [
      {nombre: 'name', descripcion: 'Nombre',},
      {nombre: 'image', descripcion: 'Imagen',},
      {nombre: 'attack', descripcion: 'Ataque',},
      {nombre: 'defense', descripcion: 'Defensa',},
    ]
  }
})
