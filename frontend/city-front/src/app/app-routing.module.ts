import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCustomerViewComponent } from './component/admin/admin-customer-view/admin-customer-view.component';
import { AdminDashboardComponent } from './component/admin/admin-dashboard/admin-dashboard.component';
import { AdminMerchantViewComponent } from './component/admin/admin-merchant-view/admin-merchant-view.component';
import { AdminProductsViewComponent } from './component/admin/admin-products-view/admin-products-view.component';
import { AdminShopViewComponent } from './component/admin/admin-shop-view/admin-shop-view.component';
import { WelcomeAdminComponent } from './component/admin/welcome-admin/welcome-admin.component';
import { AddMoneyCustomerComponent } from './component/customer/add-money-customer/add-money-customer.component';
// import { homedir } from 'os';
import { CustomerComponent } from './component/customer/customer.component';
import { DashboardComponent } from './component/customer/dashboard/dashboard.component';
import { ProductsComponent } from './component/customer/products/products.component';
import { ShopsComponent } from './component/customer/shops/shops.component';
import { ViewProductsComponent } from './component/customer/view-products/view-products.component';
import { WalletCustomerComponent } from './component/customer/wallet-customer/wallet-customer.component';
import { WelcomeCustomerComponent } from './component/customer/welcome-customer/welcome-customer.component';
import { LoginComponent } from './component/login/login.component';
import { AddMoneyMerchantComponent } from './component/merchant/add-money-merchant/add-money-merchant.component';
import { AddProductComponent } from './component/merchant/add-product/add-product.component';
import { CategoryComponent } from './component/merchant/category/category.component';
import { MHomeComponent } from './component/merchant/m-home/m-home.component';
import { MLoginComponent } from './component/merchant/m-login/m-login.component';
import { MProductsComponent } from './component/merchant/m-products/m-products.component';
import { MRegisterComponent } from './component/merchant/m-register/m-register.component';
import { MerchantWalletComponent } from './component/merchant/merchant-wallet/merchant-wallet.component';

import { MerchantComponent } from './component/merchant/merchant.component';
import { ShopComponent } from './component/merchant/shop/shop.component';
import { WelcomeComponent } from './component/merchant/welcome/welcome.component';
import { YourShopComponent } from './component/merchant/your-shop/your-shop.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegisterComponent } from './component/register/register.component';


const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: CustomerComponent
  },

  {
    path: 'mdashboard',
    component: MHomeComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent
      },

      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'categories',
        component: CategoryComponent
      },
      {
        path: 'products',
        component: MProductsComponent
      },
      {
        path: 'addProducts',
        component: AddProductComponent
      },
      {
        path: 'shop',
        component: ShopComponent
      },
      {
        path: 'wallet',
        component: MerchantWalletComponent
      },
      {
        path: 'addMoney',
        component: AddMoneyMerchantComponent
      },
      {
        path: 'your-shop',
        component: YourShopComponent
      },
    ]
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: WelcomeCustomerComponent
      },

      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'shops',
        component: ShopsComponent
      },
      {
        path: 'wallet',
        component: WalletCustomerComponent
      },
      {
        path: 'addMoney',
        component: AddMoneyCustomerComponent
      },
      {
        path: 'view-product',
        component: ViewProductsComponent
      },
    ]
  },
  {
    path: 'merchant',
    children: [
      {
        path: '',
        component: MerchantComponent
      },
      {
        path: 'register',
        component: MRegisterComponent
      },
      {
        path: 'login',
        component: MLoginComponent
      },

    ]
  },
  {
    path: 'adashboard',
    component: AdminDashboardComponent,
    children: [
      {
        path: '',
        component: WelcomeAdminComponent
      },

      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'products-view',
        component: AdminProductsViewComponent
      },
      {
        path: 'allCustomers',
        component: AdminCustomerViewComponent
      },
      {
        path: 'allMerchants',
        component: AdminMerchantViewComponent
      },
      {
        path: 'shops-view',
        component: AdminShopViewComponent
      },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
