import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MerchantService } from 'src/app/services/merchant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-money-merchant',
  templateUrl: './add-money-merchant.component.html',
  styleUrls: ['./add-money-merchant.component.css']
})
export class AddMoneyMerchantComponent implements OnInit {

  user = {
    wallet: ""
  }

  constructor(private merchantService: MerchantService, private router: Router) { }

  ngOnInit(): void {
  }

  addMoney() {
    const amt = this.user.wallet;
    console.log(amt);
    let user = JSON.parse(localStorage.getItem('user_details') || '{}');
    console.log(user);
    const email = user.email;

    this.merchantService.fetchMerchantByEmailFromRemote(email).subscribe((value) => {
      // console.log(amount);
      value.wallet += amt;
      console.log(value['wallet'])
      console.log(value);
      // value.walletAmt += val;
      this.merchantService.updateMerchant(value).subscribe((data) => {
        Swal.fire("Success", "Balance Added successfully!!", "success");
        console.log(data);
      },
        error => console.log("error occurs")
      )

      // let transaction = {
      //   'user_name': value['userName'],
      //   'amount': amt,
      //   'type': 'Credit',
      //   'date': new Date()
      // }
      // this._service.addtransaction(transaction).subscribe((trans) => {
      //   console.log("successfully added")
      // },
      //   error => console.log("error occurs")
      // )
    })
  }

}
