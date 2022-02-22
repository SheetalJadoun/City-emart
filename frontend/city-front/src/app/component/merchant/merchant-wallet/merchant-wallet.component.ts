import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MerchantService } from 'src/app/services/merchant.service';

@Component({
  selector: 'app-merchant-wallet',
  templateUrl: './merchant-wallet.component.html',
  styleUrls: ['./merchant-wallet.component.css']
})
export class MerchantWalletComponent implements OnInit {

  balance = "";
  user = {

    email: "",

  }

  constructor(private service: MerchantService, private router: Router) { }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('user_details') || '{}');
    console.log(user);
    const email = user.email;

    console.log(this.user);
    // this.balance = us.wallet;
    this.service.fetchMerchantByEmailFromRemote(email).subscribe(response => {
      this.balance = response['wallet'];
    });
  }

}
