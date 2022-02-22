import { Component, OnInit } from '@angular/core';
import { MerchantService } from 'src/app/services/merchant.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-m-register',
  templateUrl: './m-register.component.html',
  styleUrls: ['./m-register.component.css']
})
export class MRegisterComponent implements OnInit {

  constructor(private service: MerchantService, private router: Router) { }

  public mer = {
    email: '',
    merchant: '',
    password: '',
    shop: '',
    phone: '',
    wallet: ''
  }

  ngOnInit(): void {
  }

  formSubmit() {
    if (this.mer.merchant == "" || this.mer.email == null) {
      Swal.fire(
        'user name is required',
        'pls write username',
        'warning'
      )
      return;
      // alert("Successful");

    }


    // add user function from user service
    this.service.addMerchant(this.mer).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/merchant/login'])
      Swal.fire({
        title: "Successful",
        icon: 'success',
        text: "Registerd successfully",
        iconColor: "blue",

      })
    },
      (err) => {
        console.log("error occurs");
        Swal.fire({
          title: 'Error Occurs',
          text: "Please check the email and password again",
          icon: 'error',
          iconColor: 'red',
          confirmButtonColor: "green",

        });
      }
    )
  }
}
