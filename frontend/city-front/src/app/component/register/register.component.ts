import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public user = {
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    wallet: '',
    role: ''
  }

  roles: any = ['Admin', 'Customer'];
  radioChangedHandler(event: any) {
    this.user.role = event.target.value;
  }
  constructor(private service: UserService, private router: Router) { }



  ngOnInit(): void {
  }

  formSubmit() {
    if (this.user.username == "" || this.user.firstName == null) {
      Swal.fire(
        'user name is required',
        'pls write username',
        'warning'
      )
      return;
      // alert("Successful");

    }


    // add user function from user service
    this.service.addUser(this.user).subscribe((data) => {
      console.log(data);
      Swal.fire({
        title: "Successful",
        icon: 'success',
        text: "Registerd successfully",
        iconColor: "blue",

      })
      this.router.navigate(['/login']);
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
