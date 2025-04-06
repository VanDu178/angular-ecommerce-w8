import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard'; // Bảo vệ các route yêu cầu đăng nhập

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent), // Lazy load HomeComponent
    title: 'Trang Chủ - Rau Củ Quả'
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent), // Lazy load CartComponent
    title: 'Giỏ Hàng',
    canActivate: [AuthGuard]  // Bảo vệ route giỏ hàng với AuthGuard
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login.component').then(m => m.LoginComponent), // Lazy load LoginComponent
    title: 'Đăng nhập / Đăng ký'
  },
  {
    path: '**',
    redirectTo: '' // Redirect các route không tồn tại về trang chủ
  }
];
