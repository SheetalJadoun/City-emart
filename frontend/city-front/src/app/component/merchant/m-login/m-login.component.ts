import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MerchantService } from 'src/app/services/merchant.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-m-login',
  templateUrl: './m-login.component.html',
  styleUrls: ['./m-login.component.css']
})
export class MLoginComponent implements OnInit {

  constructor(private service: MerchantService, private router: Router) { }

  public merchant = {

    email: '',
    password: '',
    shop: '',


  }

  ngOnInit(): void {
  }
  formSubmit() {

    // if (this.user.role == "Admin") {
    //   this.service.loginUserFromRemote(this.user).subscribe(
    //     data => {
    //       console.log("response received")
    //       this.router.navigate(['/admin'])
    //       this.msg = "Log in successful";
    //       localStorage.setItem('user_details', JSON.stringify(this.user));

    //     },
    //     error => {
    //       console.log("exception occurs")
    //     }
    //   )
    // }
    // else {
    this.service.loginMerchantFromRemote(this.merchant).subscribe(
      data => {
        console.log("response received")
        this.router.navigate(['/mdashboard'])
        localStorage.setItem('user_details', JSON.stringify(data));
        Swal.fire({
          title: "Successful",
          icon: 'success',
          text: "Logged in successful",
          iconColor: "blue",

        })
      },
      error => {
        console.log("exception occurs")
        //this.msg = "Bad Credentials, Please enter valid emailId and password"
        Swal.fire({
          title: 'Bad Credentials',
          text: "Please check the email and password again",
          icon: 'error',
          iconColor: 'red',
          confirmButtonColor: "green",

        });
      }
    )
  }
}
  //}

