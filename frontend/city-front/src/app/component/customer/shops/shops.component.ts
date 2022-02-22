import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {

  shops: any;
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
