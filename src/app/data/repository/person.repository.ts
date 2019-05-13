import { IPersonRepository } from "src/app/core/repositories/iPerson.repository";
import { Injectable } from "@angular/core";
import { PersonRepositoryMapper } from "../mapper/Person-repository.mapper";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PersonModel } from "src/app/core/domain/person.model";
import { PersonEntity } from "../../entity/Person.entity";

import {map} from 'rxjs/operators';

@Injectable()
export class PersonRepository extends IPersonRepository{
    mapper = new PersonRepositoryMapper();

    constructor(
        private http: HttpClient
    ){
        super();
    }

    getAllPersons(): Observable<PersonModel[]> {
        return this.http
            .get<PersonEntity[]>('http://5cd950f30b0040001472027a.mockapi.io/api/v1/person')
            .pipe(
                map(this.mapper.mapFromList)
            );
    }
}