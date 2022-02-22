import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  roles: any = ['Admin', 'Customer'];
  constructor(private service: UserService, private router: Router) { }
  msg = "";
  loginData = {
    username: "",
    email: "",
    password: "",
    role: ""
  }
  customer = {
    id: "",
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    userRoles: "",
    wallet: ""
  }

  radioChangedHandler(event: any) {
    this.loginData.role = event.target.value;
  }
  ngOnInit(): void {
  }

  formSubmit() {

    if (this.loginData.role == "Admin") {
      this.service.loginUserFromRemote(this.loginData).subscribe(
        data => {
          console.log("response received")
          this.router.navigate(['/adashboard'])
          this.msg = "Log in successful";
          localStorage.setItem('user_details', JSON.stringify(data));
          Swal.fire({
            title: "Successful",
            icon: 'success',
            text: "Admin Logged in successfully",
            iconColor: "blue",

          })
        },
        error => {
          console.log("exception occurs")
        }
      )
    }
    else {
      this.service.loginUserFromRemote(this.loginData).subscribe(
        data => {
          console.log("response received")
          this.router.navigate(['/dashboard'])
          //this.customer = data;
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
}
