import { Observable } from "rxjs";
import { PersonModel } from "../domain/person.model";

export abstract class IPersonService {
    abstract getAllPersons(): Observable<PersonModel[]>;
}