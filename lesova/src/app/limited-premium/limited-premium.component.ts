import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-limited-premium',
  templateUrl: './limited-premium.component.html',
  styleUrls: ['./limited-premium.component.css']
})
export class LimitedPremiumComponent implements OnInit {

  limitedPrimiumItems = [
    {
      'productId' : '001',
      'image' : '',
      'name' : 'product 1',
      'price' : '100.00',
      'discountPrice' : '',
      'shortDescription' : '',
      'longDescription' : ''
    },
    {
      'productId' : '002',
      'image' : '',
      'name' : 'product 2',
      'price' : '20000',
      'discountPrice' : '',
      'shortDescription' : '',
      'longDescription' : ''
    }
  ];

  limitedPrimiumItem = [
    {
      'productId' : '001',
      'image' : '',
      'name' : 'product 1',
      'price' : '100.00',
      'discountPrice' : '',
      'shortDescription' : '',
      'longDescription' : ''
    },
    {
      'productId' : '002',
      'image' : '',
      'name' : 'product 2',
      'price' : '20000',
      'discountPrice' : '',
      'shortDescription' : '',
      'longDescription' : ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
