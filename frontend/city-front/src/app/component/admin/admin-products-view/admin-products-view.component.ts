import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/classes/Product';
import { MerchantService } from 'src/app/services/merchant.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-products-view',
  templateUrl: './admin-products-view.component.html',
  styleUrls: ['./admin-products-view.component.css']
})
export class AdminProductsViewComponent implements OnInit {
  product: Product[] = [];
  curPro: any = [];
  constructor(private merchantService: MerchantService, private service: ProductService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.service.fetchAllProduct().subscribe((data) => {
      this.product = data;
      console.log(data);
      console.log(this.product);
    },
      (error) => {
        console.log("error occurs");
      })
  }

  deleteItem(it: any) {
    this.product.splice(this.product.indexOf(it), 1);
    this.service.deleteProduct(it.id).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/adashboard/product-view'])
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
