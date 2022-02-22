import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/classes/Product';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  product: Product[] = [];

  constructor(private service: ProductService, private router: Router) { }

  ngOnInit(): void {
    // let u = JSON.parse(localStorage.getItem('user_details') || '{}');
    // this.service.fetchAllProduct().subscribe((data) => {
    //   this.product = data;
    //   console.log(data);
    //   console.log(this.product);
    // },
    //   (error) => {
    //     console.log("error occurs");
    //   })
    let us = JSON.parse(localStorage.getItem('user_details') || '{}');
    if (typeof (us) == null) {
      Swal.fire({
        title: "Please Log in first",
        text: "If you do not having an Account pls Register",
        icon: 'error',
      })
    }
    const role = us.role;
    console.log(role);
    if (role != 'Customer' && role != 'Admin') {
      Swal.fire({
        title: "Access Denied",
        icon: 'error',
        confirmButtonColor: "red"
      }
      );
      this.router.navigate(['/register'])

    }

  }
}
