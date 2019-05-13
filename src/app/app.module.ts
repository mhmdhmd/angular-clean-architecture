import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceModule } from './service/service.module';
import { DataModule } from './data/data.module';
import { PresentationModule } from './presentation/presentation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataModule,
    ServiceModule,
    PresentationModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
