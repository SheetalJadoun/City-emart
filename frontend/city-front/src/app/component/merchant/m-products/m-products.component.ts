import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/classes/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-m-products',
  templateUrl: './m-products.component.html',
  styleUrls: ['./m-products.component.css']
})
export class MProductsComponent implements OnInit {

  // products = [
  //   {
  //     pid: 12,
  //     title: 'Saree',
  //     description: 'This is banarsi saree',
  //     price: 200,
  //     qty: 12
  //   },
  //   {
  //     pid: 12,
  //     title: 'Saree',
  //     description: 'This is banarsi saree',
  //     price: 200,
  //     qty: 12
  //   },
  //   {
  //     pid: 12,
  //     title: 'Saree',
  //     description: 'This is banarsi saree',
  //     price: 200,
  //     qty: 12
  //   }
  // ]

  pro = {
    merchant: "",
    shop: ""
  }

  product: Product[] = [];

  constructor(private service: ProductService, private router: Router) { }

  ngOnInit(): void {
    let u = JSON.parse(localStorage.getItem('user_details') || '{}');
    this.pro.merchant = u.merchant;
    this.pro.shop = u.shop;
    console.log(this.pro);
    this.service.fetchProductListFromRemote(this.pro).subscribe((data) => {
      this.product = data;
      console.log(data);
      console.log(this.product);
    },
      (error) => {
        console.log("error occurs");
      })


  }



}
