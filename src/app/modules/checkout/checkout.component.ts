import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  totalCartDetails: any = [];
  quantities:any=[1,2,3];
  constructor() { }

  ngOnInit() {
    this.totalCartDetails = JSON.parse(sessionStorage.getItem('totalCart'));
    this.totalCartDetails.forEach(element => {
      element.total = element.quantity * element.price;
    });
  }

  changeTotalQuantity(quantity, item){
    item.total = quantity*item.price;
  }

  deleteProduct(item){
    this.totalCartDetails = this.totalCartDetails.filter(x => {
      return x.id != item.id;
    })
    sessionStorage.setItem('totalCart', JSON.stringify(this.totalCartDetails));
  }

}
