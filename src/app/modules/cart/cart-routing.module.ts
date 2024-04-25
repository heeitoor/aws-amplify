import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartOneComponent } from "./cart-one/cart-one.component";

const routes: Routes = [
  {
    path: "",
    component: CartOneComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
