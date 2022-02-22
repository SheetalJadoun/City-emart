import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-side-bar-customer',
  templateUrl: './side-bar-customer.component.html',
  styleUrls: ['./side-bar-customer.component.css']
})
export class SideBarCustomerComponent implements OnInit {

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    localStorage.removeItem('user_details');
    this.router.navigate(['/register']);
  }
}
