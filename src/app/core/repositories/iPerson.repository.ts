import { Observable } from "rxjs";
import { PersonModel } from "../domain/person.model";

export abstract class IPersonRepository {
    abstract getAllPersons(): Observable<PersonModel[]>;
}