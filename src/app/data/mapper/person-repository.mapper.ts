import { Mapper } from "src/app/core/base/mapper";
import { PersonEntity } from "../../entity/Person.entity";
import { PersonModel } from "src/app/core/domain/person.model";

export class PersonRepositoryMapper implements Mapper<PersonEntity, PersonModel> {
    mapToList(param: PersonModel[]): PersonEntity[] {
        let personEntities: PersonEntity[] = [];

        param.forEach(personModel => {
            personEntities.push({
                id: 0,
                name: personModel.name,
                avatar: personModel.avatar,
                createdAt: personModel.createdAt
            })
        });

        return personEntities;
    }

    mapFromList(param: PersonEntity[]): PersonModel[] {
        let personModels: PersonModel[] = [];

        param.forEach(personEntity => {
            personModels.push(
                {
                    name: personEntity.name,
                    avatar: personEntity.avatar,
                    createdAt: personEntity.createdAt
                }
            )
        });

        return personModels;
    }

    mapFrom(param: PersonEntity): PersonModel {
        return {
            name: param.name,
            avatar: param.avatar,
            createdAt: param.createdAt
        };
    }    
    
    mapTo(param: PersonModel): PersonEntity {
        return {
            id: 0,
            name: param.name,
            avatar: param.avatar,
            createdAt: param.createdAt
        };
    }
}