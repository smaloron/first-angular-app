import { Component } from '@angular/core';

interface PersonInterface {
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

  isFormValid(): boolean {
    return this.person.firstName &&
      this.person.firstName.trim().length > 0 &&
      this.person.name &&
      this.person.name.trim().length > 0;
  }

  addPerson(): void {
    // this.isFormTouched = true;
    if (this.isFormValid()) {
      this.personList.push(this.person);
      this.person = this.createNewPerson();
      this.isFormTouched = false;
    }  
  }

  onDelete(pos: number): void {
    this.personList.splice(pos, 1);
  }

}
