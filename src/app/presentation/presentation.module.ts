import { NgModule } from "@angular/core";

import { PersonListComponent } from "./Person-list/Person-list.component";
import { PersonItemComponent } from "./person-list/person-item/person-item.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    PersonListComponent,
    PersonItemComponent
  ],
  imports:[
    CommonModule
  ],
  exports:[
    PersonListComponent,
    PersonItemComponent
  ]
})
export class PresentationModule { }