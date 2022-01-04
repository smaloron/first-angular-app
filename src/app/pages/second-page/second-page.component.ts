import { Component, OnInit } from '@angular/core';
import { HelloService } from 'src/app/services/hello.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  constructor(public helloService: HelloService) { }

  ngOnInit(): void {
  }

}
