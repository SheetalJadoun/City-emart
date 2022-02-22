import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-wallet-customer',
  templateUrl: './wallet-customer.component.html',
  styleUrls: ['./wallet-customer.component.css']
})
export class WalletCustomerComponent implements OnInit {

  balance = "";
  user = {

    email: "",

  }
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('user_details') || '{}');
    console.log(user);
    const email = user.email;

    console.log(this.user);
    // this.balance = us.wallet;
    this.service.fetchUserByEmailFromRemote(email).subscribe(response => {
      this.balance = response['wallet'];
    });
  }

}
