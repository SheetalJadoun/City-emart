import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MerchantService } from 'src/app/services/merchant.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-customer-view',
  templateUrl: './admin-customer-view.component.html',
  styleUrls: ['./admin-customer-view.component.css']
})
export class AdminCustomerViewComponent implements OnInit {
  customer: any;
  constructor(private merchantService: MerchantService, private service: ProductService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.fetchAllCustomer().subscribe((data) => {
      this.customer = data;
      console.log(data);
      console.log(this.customer);
    },
      (error) => {
        console.log("error occurs");
      })
  }
  deleteCustomer(it: any) {
    this.customer.splice(this.customer.indexOf(it), 1);
    this.userService.deleteCustomer(it.id).subscribe(
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
