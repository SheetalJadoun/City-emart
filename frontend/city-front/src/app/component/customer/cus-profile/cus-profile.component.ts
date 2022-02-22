import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cus-profile',
  templateUrl: './cus-profile.component.html',
  styleUrls: ['./cus-profile.component.css']
})
export class CusProfileComponent implements OnInit {

  user = null;
  User = {
    id: '',
    email: '',
    name: '',
    phone: '',
    role: '',
  }
  constructor() { }

  ngOnInit(): void {
    let u = JSON.parse(localStorage.getItem('user_details') || '{}');
    console.log(u);
    console.log(u.firstName);
    this.User.id = u.id;
    this.User.email = u.email;
    this.User.name = u.firstName;
    this.User.phone = u.phone;
    this.User.role = u.role;

  }

}
