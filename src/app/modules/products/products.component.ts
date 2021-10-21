import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productDetails: any= [];
  constructor(
    private router: Router
  ) { }
  
  ngOnInit() {
    this.productDetails = [
      {
        id:1,
        title:"APPLE iPhone 12",
        shortDescription: 'Blue, 64 GB',
        price: 53999,
        quantity: 1,
        img: './../../../assets/img/iphone12.jpeg',
        productimgs: ['./../../../assets/img/iphone12.jpeg'],
        highlight:[
            '64 GB ROM',
            '15.49 cm (6.1 inch) Super Retina XDR Display',
            '12MP + 12MP | 12MP Front Camera',
            'A14 Bionic Chip with Next Generation Neural Engine Processor',
            '12MP TrueDepth Front Camera with Night Mode, 4K Dolby Vision HDR Recording'
        ]
      },
      {
        id:2,
        title:"OPPO Reno6 5G",
        shortDescription: 'Aurora, 128 GB',
        price: 29999,
        quantity: 1,
        img: './../../../assets/img/reno6.jpeg',
        productimgs: ['./../../../assets/img/reno6.jpeg'],
        highlight:[
          '8 GB RAM | 128 GB ROM',
          '16.33 cm (6.43 inch) Full HD+ Display',
          '64MP + 8MP + 2MP | 32MP Front Camera',
          '4300 mAh Lithium-ion Polymer Battery',
          'MediaTek Dimensity 900 Processor'
        ]
      },
      {
        id:3,
        title:"MOTOROLA Edge 20 Fusion",
        shortDescription: 'Electric Graphite, 128 GB',
        price: 20499,
        quantity: 1,
        img: './../../../assets/img/motorola.jpeg',
        productimgs: ['./../../../assets/img/motorola.jpeg'],
        highlight:[
          '6 GB RAM | 128 GB ROM',
          '16.94 cm (6.67 inch) Full HD+ Display',
          '108MP + 8MP + 2MP | 32MP Front Camera',
          '5000 mAh Battery',
          'MediaTek Dimensity 800U Processor'
        ]
      },
      {
        id:4,
        title:"VIVO X70 Pro",
        shortDescription: 'Cosmic Black, 128 GB',
        price: 46990,
        quantity: 1,
        img: './../../../assets/img/vivox7pro.jpeg',
        productimgs: ['./../../../assets/img/vivox7pro.jpeg'],
        highlight:[
          '8 GB RAM | 128 GB ROM',
          '16.66 cm (6.56 inch) Full HD+ Display',
          '50MP + 12MP + 12MP + 8MP | 32MP Front Camera',
          '4450 mAh Battery',
          'MediaTek Dimensity 1200 Processor'
        ]
      },
      {
        id:5,
        title:"POCO F3 GT",
        shortDescription: 'Gunmetal Silver, 128 GB',
        price: 28990,
        quantity: 1,
        img: './../../../assets/img/pocoFT.jpeg',
        productimgs: ['./../../../assets/img/pocoFT.jpeg'],
        highlight:[
          '8 GB RAM | 128 GB ROM',
          '16.94 cm (6.67 inch) Full HD+ Display',
          '64MP + 8MP + 2MP | 16MP Front Camera',
          '5065 mAh Lithium-ion Polymer Battery',
          'MediaTek Dimensity 1200 Processor'
        ]
      },
      {
        id:6,
        title:"Realme Narzo 30",
        shortDescription: 'Racing Blue, 64 GB',
        price: 12490,
        quantity: 1,
        img: './../../../assets/img/realmenarzo.jpeg',
        productimgs: ['./../../../assets/img/realmenarzo.jpeg'],
        highlight:[
          '4 GB RAM | 64 GB ROM | Expandable Upto 256 GB',
          '16.51 cm (6.5 inch) Full HD+ Display',
          '48MP + 2MP + 2MP | 16MP Front Camera',
          '5000 mAh Battery',
          'MediaTek Helio G95 Processor'
        ]
      }
    ]
  }

  productDetail(item){
    sessionStorage.setItem('productDetail', JSON.stringify(item));
    this.router.navigate(['/productDetail']);
  }

}
