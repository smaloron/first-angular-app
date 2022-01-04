import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonInterface } from 'src/app/app.component';

export interface PersonFormStateInterface  {
  touched: boolean;
  valid: boolean;
}

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  @Input() person: PersonInterface;
  @Output() onSubmit = new EventEmitter<PersonInterface>();
  @Output() onFormCheck = new EventEmitter<boolean>();
  @Output() onFormTouched = new EventEmitter<PersonFormStateInterface>();


  constructor() { }

  isFormValid(): boolean {
    return this.person.firstName &&
      this.person.firstName.trim().length > 0 &&
      this.person.name &&
      this.person.name.trim().length > 0;
  }

  ngOnInit(): void {
  }

  onTouchForm(): void {
    this.onFormTouched.emit({
      touched: true,
      valid: this.isFormValid()
    });
  }

  addPerson(): void {
    if (this.isFormValid()) {
      this.onSubmit.emit(this.person);
      this.onFormTouched.emit({
        touched: false,
        valid: true
      });
    } else {
      this.onFormCheck.emit(false);
    }
  }

}
