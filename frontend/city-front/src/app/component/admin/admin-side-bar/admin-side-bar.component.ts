import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-side-bar',
  templateUrl: './admin-side-bar.component.html',
  styleUrls: ['./admin-side-bar.component.css']
})
export class AdminSideBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    localStorage.removeItem('user_details');
    this.router.navigate(['/register']);
  }
}
