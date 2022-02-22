import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  user = null;
  User = {
    id: '',
    email: '',
    shop_name: '',
    name: '',
    phone: '',
    role: '',
  }

  ngOnInit(): void {
    let u = JSON.parse(localStorage.getItem('user_details') || '{}');
    console.log(u);
    this.User.id = u.id;
    this.User.email = u.email;
    this.User.name = u.merchant;
    this.User.shop_name = u.shop_name;
    this.User.phone = u.phone;
    this.User.role = u.role;
  }

}
