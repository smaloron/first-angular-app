import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person;
  @Input() even: boolean;
  @Input() pos: number;
  @Output() onDeletePerson = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  delete(): void {
    this.onDeletePerson.emit(this.pos);
  }

}
