import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  categories = [{
    cid: 23,
    title: 'Footwear'
  }, {
    cid: 23,
    title: 'Footwear'
  },
  {
    cid: 23,
    title: 'Footwear'
  }
  ]
  public product = {
    merchant: '',
    shop: '',
    name: '',
    description: '',
    category: '',
    price: '',
    qty: ''
  }

  constructor(private service: ProductService, private router: Router) { }

  ngOnInit(): void {
    let u = JSON.parse(localStorage.getItem('user_details') || '{}');
    console.log(u);
    this.product.merchant = u.merchant;
    console.log(this.product.merchant);
    this.product.shop = u.shop;
  }

  add() {
    this.service.addProduct(this.product).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/mdashboard/products'])
      Swal.fire({
        title: "Successful",
        icon: 'success',
        text: "Product added successfully in your shop",
        iconColor: "blue",
      })
    },
      (err) => {
        console.log("error occurs");
        Swal.fire({
          title: 'Error Occurs',
          text: "Please check the details",
          icon: 'error',
          iconColor: 'red',
          confirmButtonColor: "green",

        })
      }
    )

  }
}
