import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {InputIconComponent} from "./input-icon.component";
import {InputSearchComponent} from "./input-search.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    InputIconComponent,
    InputSearchComponent
  ],
  exports: [
    InputIconComponent,
    InputSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ControlsModule {
}
