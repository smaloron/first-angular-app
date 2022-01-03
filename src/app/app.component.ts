import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  personList = [
    { name: 'Brahé', firstName: 'Tycho' },
    { name: 'Hopper', firstName: 'Grace' },
    { name: 'Eluard', firstName: 'Paul' },
  ];

}
