import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  toCartProducts: any = [];
  constructor(
    private router: Router
  ) { }

  ngDoCheck(){
    this.checkCartCount();
  }

  ngOnInit() {
    this.checkCartCount();
    interval(30000).subscribe(x=>{
      this.checkCartCount();
    })
  }

  checkCartCount(){
    if(JSON.parse(sessionStorage.getItem('totalCart')) == null){
      sessionStorage.setItem('totalCart', JSON.stringify(this.toCartProducts));
    }else{
      this.toCartProducts = JSON.parse(sessionStorage.getItem('totalCart'));
    }
    console.log('this.toCartProducts', this.toCartProducts);
  }

  toCheckout(){
    this.router.navigate(['/checkout']);
  }

  toMain(){
    this.router.navigate(['/products']);
  }
}
