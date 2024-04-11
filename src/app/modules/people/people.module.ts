import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PeopleRoutingModule } from "./people-routing.module";
import { PeopleOneComponent } from "./people-one/people-one.component";
import { PeopleTwoComponent } from "./people-two/people-two.component";
import { PeopleThreeComponent } from "./people-three/people-three.component";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [PeopleOneComponent, PeopleTwoComponent, PeopleThreeComponent],
  imports: [CommonModule, PeopleRoutingModule, MatButtonModule],
  exports: [PeopleOneComponent, PeopleTwoComponent, PeopleThreeComponent],
})
export class PeopleModule {}
