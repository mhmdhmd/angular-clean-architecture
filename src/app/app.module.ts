import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { IPersonRepository } from './core/repositories/iPerson.repository';
import { PersonListComponent } from './presentation/Person-list/Person-list.component';
import { IPersonService } from './core/services/iPerson.service';
import { PersonService } from './service/Person.service';
import { PersonRepository } from './data/repository/Person.repository';
import { PersonItemComponent } from './presentation/person-list/person-item/person-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {provide: IPersonRepository, useClass: PersonRepository},
    {provide: IPersonService, useClass: PersonService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
