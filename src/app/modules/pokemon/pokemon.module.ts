import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {IndexComponent} from "./pages/index.component";
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonListadoComponent } from './components/pokemon-listado/pokemon-listado.component';

@NgModule({
  declarations: [
    IndexComponent,
    PokemonComponent,
    PokemonListadoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: IndexComponent
    }])
  ]
})
export class PokemonModule {

}
