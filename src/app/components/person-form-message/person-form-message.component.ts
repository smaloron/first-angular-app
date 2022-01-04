import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-form-message',
  templateUrl: './person-form-message.component.html',
  styleUrls: ['./person-form-message.component.css']
})
export class PersonFormMessageComponent implements OnInit {

  @Input() isFormValid: boolean;
  @Input() isFormTouched: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
