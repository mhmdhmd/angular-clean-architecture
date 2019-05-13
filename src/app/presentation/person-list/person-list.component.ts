import { Component, OnInit } from '@angular/core';
import { PersonModel } from 'src/app/core/domain/person.model';
import { IPersonService } from 'src/app/core/services/iPerson.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  Persons: PersonModel[];
  wait= false;

  constructor(
    private PersonService: IPersonService
  ) { }

  ngOnInit() {

  }

  onLoad() {
    this.Persons = [];
    this.wait = true;
    this.PersonService.getAllPersons().subscribe(
      (data: PersonModel[]) => {
        this.wait = false;
        this.Persons = data;
      }
    )
  }
}
