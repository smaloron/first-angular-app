import { Component } from '@angular/core';
import { PersonFormStateInterface } from './components/person-form/person-form.component';

export interface PersonInterface {
  name: string;
  firstName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  personList: PersonInterface[] = [
    { name: 'Brahé', firstName: 'Tycho' },
    { name: 'Hopper', firstName: 'Grace' },
    { name: 'Eluard', firstName: 'Paul' },
  ];

  isFormTouched = false;
  isFormValid = true;

  person: PersonInterface;

  now = new Date();

  price = 5;

  constructor() {
    this.person = this.createNewPerson();
  }

  createNewPerson(): PersonInterface {
    return {
      name: '',
      firstName: '',
    }
  }

  checkForm(state: boolean): void {
    this.isFormValid = state;
  }

  checkTouched(state: PersonFormStateInterface) {
    this.isFormTouched = state.touched;
    this.isFormValid = state.valid;

    console.log(
      this.isFormValid,
      this.isFormTouched
    )
  }

  addPerson(person: PersonInterface): void {
      this.personList.push(person);
      this.person = this.createNewPerson();
  }

  onDelete(pos: number): void {
    this.personList.splice(pos, 1);
  }

}
