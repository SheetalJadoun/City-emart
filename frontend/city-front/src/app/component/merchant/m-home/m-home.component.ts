import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-m-home',
  templateUrl: './m-home.component.html',
  styleUrls: ['./m-home.component.css']
})
export class MHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    let us = JSON.parse(localStorage.getItem('user_details') || '{}');
    if (typeof (us) == null) {
      Swal.fire({
        title: "Please Log in first",
        text: "If you do not having an Account pls Register",
        icon: 'error',
      })
    }
    const role = us.role;
    console.log(role);
    if (role != 'Merchant') {
      Swal.fire({
        title: "Access Denied",
        icon: 'error',
        confirmButtonColor: "red"
      }
      );
      this.router.navigate(['/'])
    }
  }

}
