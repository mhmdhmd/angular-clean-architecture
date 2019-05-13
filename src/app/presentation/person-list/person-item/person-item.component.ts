import { Component, OnInit, Input } from '@angular/core';
import { PersonModel } from 'src/app/core/domain/person.model';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.css']
})
export class PersonItemComponent implements OnInit {
  @Input() person: PersonModel;

  constructor() { }

  ngOnInit() {
  }

}
