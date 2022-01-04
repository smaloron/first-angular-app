import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  @Input() amount: number = 0;
  @Output() amountChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onIncrease() {
    this.amount *= 1.1;
    this.amountChange.emit(this.amount);
  }

}
