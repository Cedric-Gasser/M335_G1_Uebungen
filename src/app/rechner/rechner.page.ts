import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rechner',
  templateUrl: './rechner.page.html',
  styleUrls: ['./rechner.page.scss'],
})
export class RechnerPage implements OnInit {

  calculation: string = "";

  history: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  addToCalculation(char: string) {
    this.calculation += char;
  }

  allClear() {
    this.calculation = "";
  }

  clear(){
    this.calculation = this.calculation.slice(0, -1);
  }

  calcResult() {
    this.history.push(this.calculation + " = " + eval(this.calculation));
    this.calculation = eval(this.calculation);
  }

}
