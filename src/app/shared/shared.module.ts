import {NgModule} from "@angular/core";
import {LayoutComponent} from "./layout/layout.component";
import {CommonModule} from "@angular/common";
import {SharedRoutingModule} from "./shared.routing.module";

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule {
}
