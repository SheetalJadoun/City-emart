import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/classes/Product';
import { MerchantService } from 'src/app/services/merchant.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
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

  buyItem(it: any) {
    const self = this;
    const tprice = it.price;
    let us = JSON.parse(localStorage.getItem('user_details') || '{}');
    console.log(us);
    const email = us.email;
    console.log(email);

    this.userService.fetchUserByEmailFromRemote(email).subscribe(
      (data) => {
        if ((data['wallet'] -= tprice) > 0) {
          // Swal.fire('Successful');
          this.service
          console.log(data['wallet'])
          console.log(it.pid);
          it.qty--;

          this.service.fetchProductByIdFromRemote(it.pid).subscribe((res) => {
            this.curPro = res;
            console.log(this.curPro)
          },
            error => console.log("item cannot fetched")
          )

          this.merchantService.fetchMerchantByShopFromRemote(it.shop).subscribe((ans) => {
            ans['wallet'] += tprice;

            this.merchantService.updateMerchant(ans).subscribe((v) => {
              console.log("money successfully added in merchant account");
            },
              (err) => {
                console.log("error occurs in adding money in merchnat acc")
              })
          })



          this.service.updateProductQuantity(it.pid, it).subscribe(user => {
            console.log("item updated successfully")
          },
            error => console.log("failure")
          )
          this.userService.updateUser(data).subscribe(user => {
            Swal.fire({
              title: "Done",
              text: "Item Purchasing Done",
              icon: "success",

            });
          })
          // let transaction = {
          //   'user_name': data['userName'],
          //   'amount': tprice,
          //   'type': 'Debit',
          //   'date': new Date()
          // }
          // this.service.addtransaction(transaction).subscribe((trans) => {
          //   console.log("successfully added")
          // },
          //   error => console.log("error occurs")
          // )

        }
        else {
          data['balance'] += tprice;
          Swal.fire("Oops!", "Not Enough Balance.Please add amount into your account.", "error");

        }
      }

    )
  }

}
