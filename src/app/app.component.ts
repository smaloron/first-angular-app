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

  buttonClick() {
    console.log("click");
  }
}
