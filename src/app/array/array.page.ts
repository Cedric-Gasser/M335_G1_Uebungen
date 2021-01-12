import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.page.html',
  styleUrls: ['./array.page.scss'],
})
export class ArrayPage implements OnInit {
  fruechte: any = [
    {name:'Orange'},
    {name:'Banane'},
    {name:'Apfel'}
    ];

  fruechte2: any = [
    {name:'Orange', imgURL:"https://21938d87035b057bdf6c-90af61dee2ae7cca81416da93cc58570.ssl.cf3.rackcdn.com/scale/450/300/16c7889854e811b9b4b488ea0e615bae88d4665b.jpg"},
    {name:'Banane', imgURL:"https://www.barthfruit.ch/custom/images/contentBilder/big/img_0658_banane.jpg"},
    {name:'Apfel', imgURL:"https://www.lebensbaum.com/files/styles/greige_image_476x476/public/images/greiges/apfel-suesserapfel1_0.jpg?itok=6AGJQzt4"}
    ];
  
  constructor() { }

  ngOnInit() {
  }

}
