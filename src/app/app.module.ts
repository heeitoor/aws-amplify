import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PreloadAllModules, RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      [
        {
          path: "people",
          loadChildren: () =>
            import("./modules/people/people.module").then(
              (m) => m.PeopleModule
            ),
        },
        {
          path: "cart",
          loadChildren: () =>
            import("./modules/cart/cart.module").then((m) => m.CartModule),
        },
      ],
      {
        preloadingStrategy: PreloadAllModules,
      }
    ),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
