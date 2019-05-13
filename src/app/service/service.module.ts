import { NgModule } from "@angular/core";
import { IPersonRepository } from "../core/repositories/iPerson.repository";
import { PersonRepository } from "../data/repository/Person.repository";
import { IPersonService } from "../core/services/iPerson.service";
import { PersonService } from "./Person.service";

@NgModule({
    providers: [
        {provide: IPersonRepository, useClass: PersonRepository},
        {provide: IPersonService, useClass: PersonService},
      ]
})

export class ServiceModule{}