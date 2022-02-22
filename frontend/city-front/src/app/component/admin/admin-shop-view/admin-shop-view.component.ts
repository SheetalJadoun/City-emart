import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-shop-view',
  templateUrl: './admin-shop-view.component.html',
  styleUrls: ['./admin-shop-view.component.css']
})
export class AdminShopViewComponent implements OnInit {

  constructor(private service: ProductService, private router: Router) { }
  shops: any;
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
