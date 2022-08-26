import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {IndexComponent} from "./pages/index.component";
import { PokemonComponent } from './components/pokemon/pokemon.component';

@NgModule({
  declarations: [
    IndexComponent,
    PokemonComponent
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
