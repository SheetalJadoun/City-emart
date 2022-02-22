import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-money-customer',
  templateUrl: './add-money-customer.component.html',
  styleUrls: ['./add-money-customer.component.css']
})
export class AddMoneyCustomerComponent implements OnInit {

  User = {
    id: '',
    email: '',
    name: '',
    phone: '',
    role: '',
  }
  user = {
    wallet: ""
  }
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

  }
  addMoney() {
    const amt = this.user.wallet;
    console.log(amt);
    let user = JSON.parse(localStorage.getItem('user_details') || '{}');
    console.log(user);
    const email = user.email;

    this.userService.fetchUserByEmailFromRemote(email).subscribe((value) => {
      // console.log(amount);
      value.wallet += amt;
      console.log(value['wallet'])
      console.log(value);
      // value.walletAmt += val;
      this.userService.updateUser(value).subscribe((data) => {
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
