import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  price = 5;

  catalog = [
    { label: 'Souris', price: 5 },
    { label: 'Ordinateur', price: 800 },
    { label: 'Ecran', price: 500 },
  ]

}
