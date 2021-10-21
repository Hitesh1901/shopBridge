import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent, ProductDetailComponent, CheckoutComponent, TopNavComponent, HomeComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TopNavComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModulesModule { }
