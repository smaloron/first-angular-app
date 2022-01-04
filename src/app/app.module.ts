import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonComponent } from './components/person/person.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { PersonFormMessageComponent } from './components/person-form-message/person-form-message.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonFormComponent,
    PersonFormMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
