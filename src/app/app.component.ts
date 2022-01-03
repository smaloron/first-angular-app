import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-app';
  a = 5;
  b = 2;
  isHidden = false;
  name: string;
  
  personList: string[] = [];
  // personList: Array<string> = []

  buttonClick(event: Event): void {
    this.isHidden = !this.isHidden;
    console.log(event);
  }

  setName(name: string): void {
    this.name = name;
    this.personList.push(name);
    console.log(this.personList);
  }


}
