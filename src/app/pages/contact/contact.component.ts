import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router) { }

  /*
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }*/

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigate(['/home']);
  }

}
