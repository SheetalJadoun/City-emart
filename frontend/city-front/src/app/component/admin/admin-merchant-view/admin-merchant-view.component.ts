import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MerchantService } from 'src/app/services/merchant.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-merchant-view',
  templateUrl: './admin-merchant-view.component.html',
  styleUrls: ['./admin-merchant-view.component.css']
})
export class AdminMerchantViewComponent implements OnInit {
  customer: any;
  constructor(private merchantService: MerchantService, private service: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.merchantService.fetchAllMerchant().subscribe((data) => {
      this.customer = data;
      console.log(data);
      console.log(this.customer);
    },
      (error) => {
        console.log("error occurs");
      })
  }


  deleteMerchant(it: any) {
    this.customer.splice(this.customer.indexOf(it), 1);
    this.merchantService.deleteMerchant(it.id).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/adashboard/allCustomers'])
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
