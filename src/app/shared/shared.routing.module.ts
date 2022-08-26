import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LayoutComponent} from "./layout/layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
  {
    path: 'pokemon',
    loadChildren: () => import('../modules/pokemon/pokemon.module').then(m => m.PokemonModule)
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {
}
