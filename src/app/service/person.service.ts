import { IPersonService } from "../core/services/iPerson.service";
import { Observable } from "rxjs";
import { PersonModel } from "../core/domain/person.model";
import { Injectable } from "@angular/core";
import { IPersonRepository } from "../core/repositories/iPerson.repository";

@Injectable()
export class PersonService extends IPersonService{
    constructor(
        private PersonRepository: IPersonRepository
    ){
        super();
    }
    
    getAllPersons(): Observable<PersonModel[]> {
        return this.PersonRepository.getAllPersons();
    }
}