import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CartRoutingModule } from "./cart-routing.module";
import { CartThreeComponent } from "./cart-three/cart-three.component";
import { CartTwoComponent } from "./cart-two/cart-two.component";
import { CartOneComponent } from "./cart-one/cart-one.component";

@NgModule({
  declarations: [CartThreeComponent, CartTwoComponent, CartOneComponent],
  imports: [CommonModule, CartRoutingModule],
  exports: [CartThreeComponent, CartTwoComponent, CartOneComponent],
})
export class CartModule {}
