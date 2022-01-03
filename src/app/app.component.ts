import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    name: 'Seb',
    pass: '123'
  }

  isFormValid() {
    return (
      this.user.name &&
      this.user.name.length > 0 &&
      this.user.pass &&
      this.user.pass.length > 0
    );
  }

  validForm() {
    console.log(this.user);
  }

}
