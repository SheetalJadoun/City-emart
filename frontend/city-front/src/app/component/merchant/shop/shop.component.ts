import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/classes/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {


  shops: any;

  product: Product[] = [];
  constructor(private service: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.service.fetchAllShop().subscribe((data) => {
      this.shops = data;
      console.log(data);
      console.log(this.shops);
    },
      (error) => {
        console.log("error occurs");
      })

  }

}
