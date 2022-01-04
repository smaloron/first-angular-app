import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id: number;

  constructor(private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.id = this.currentRoute.snapshot.params.id;
    this.currentRoute.params.subscribe(
      params => this.id = params.id
    );
  }

}
