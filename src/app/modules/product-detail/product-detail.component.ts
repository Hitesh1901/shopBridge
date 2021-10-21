import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetails:any;
  toCartProducts: any = [];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.productDetails = JSON.parse(sessionStorage.getItem('productDetail'));
    if(JSON.parse(sessionStorage.getItem('totalCart')) == null){
      sessionStorage.setItem('totalCart', JSON.stringify(this.toCartProducts));
    }
    
  }

  ngOnChanges(){
    
  }

  selectChangeHandler(event){
    this.productDetails.quantity = parseInt(event.target.value);
  }

  toCart(productDetails){
    this.toCartProducts = JSON.parse(sessionStorage.getItem('totalCart'));
    if(this.toCartProducts.filter(x => x.id === productDetails.id).length == 0){
      this.toCartProducts.push(productDetails);
    }
    sessionStorage.setItem('totalCart', JSON.stringify(this.toCartProducts));
    // this.router.navigate(['/checkout']);
  }

}
