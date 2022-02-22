import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MerchantService } from 'src/app/services/merchant.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private service: MerchantService, private router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    localStorage.removeItem('user_details');
    this.router.navigate(['/register']);
  }
}
