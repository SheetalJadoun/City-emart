import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
// import { FormsModule } from '@angular/forms';
import { MerchantComponent } from './component/merchant/merchant.component';
import { CustomerComponent } from './component/customer/customer.component';
import { AdminComponent } from './component/admin/admin.component';
import { MHomeComponent } from './component/merchant/m-home/m-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MRegisterComponent } from './component/merchant/m-register/m-register.component';
import { MLoginComponent } from './component/merchant/m-login/m-login.component';
import { SideBarComponent } from './component/merchant/side-bar/side-bar.component';
import { ProfileComponent } from './component/profile/profile.component';
import { WelcomeComponent } from './component/merchant/welcome/welcome.component';
import { CategoryComponent } from './component/merchant/category/category.component';
import { MProductsComponent } from './component/merchant/m-products/m-products.component';
import { AddProductComponent } from './component/merchant/add-product/add-product.component';
import { ShopComponent } from './component/merchant/shop/shop.component';
import { DashboardComponent } from './component/customer/dashboard/dashboard.component';
import { SideBarCustomerComponent } from './component/customer/side-bar-customer/side-bar-customer.component';
import { ProductsComponent } from './component/customer/products/products.component';
import { ShopsComponent } from './component/customer/shops/shops.component';
import { CusProfileComponent } from './component/customer/cus-profile/cus-profile.component';
import { WalletCustomerComponent } from './component/customer/wallet-customer/wallet-customer.component';
import { AddMoneyCustomerComponent } from './component/customer/add-money-customer/add-money-customer.component';
import { ViewProductsComponent } from './component/customer/view-products/view-products.component';
import { MerchantWalletComponent } from './component/merchant/merchant-wallet/merchant-wallet.component';
import { AddMoneyMerchantComponent } from './component/merchant/add-money-merchant/add-money-merchant.component';
import { YourShopComponent } from './component/merchant/your-shop/your-shop.component';
import { AdminSideBarComponent } from './component/admin/admin-side-bar/admin-side-bar.component';
import { AdminDashboardComponent } from './component/admin/admin-dashboard/admin-dashboard.component';
import { AdminProductsViewComponent } from './component/admin/admin-products-view/admin-products-view.component';
import { AdminShopViewComponent } from './component/admin/admin-shop-view/admin-shop-view.component';
import { AdminCustomerViewComponent } from './component/admin/admin-customer-view/admin-customer-view.component';
import { AdminMerchantViewComponent } from './component/admin/admin-merchant-view/admin-merchant-view.component';
import { WelcomeAdminComponent } from './component/admin/welcome-admin/welcome-admin.component';
import { WelcomeCustomerComponent } from './component/customer/welcome-customer/welcome-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MerchantComponent,
    CustomerComponent,
    AdminComponent,
    MHomeComponent,

    NavbarComponent,
    MRegisterComponent,
    MLoginComponent,
    AddProductComponent,
    SideBarComponent,
    ProfileComponent,
    WelcomeComponent,
    CategoryComponent,
    MProductsComponent,
    ShopComponent,
    DashboardComponent,
    SideBarCustomerComponent,
    ProductsComponent,
    ShopsComponent,
    CusProfileComponent,
    WalletCustomerComponent,
    AddMoneyCustomerComponent,
    ViewProductsComponent,
    MerchantWalletComponent,
    AddMoneyMerchantComponent,
    YourShopComponent,
    AdminSideBarComponent,
    AdminDashboardComponent,
    AdminProductsViewComponent,
    AdminShopViewComponent,
    AdminCustomerViewComponent,
    AdminMerchantViewComponent,
    WelcomeAdminComponent,
    WelcomeCustomerComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    FormsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
