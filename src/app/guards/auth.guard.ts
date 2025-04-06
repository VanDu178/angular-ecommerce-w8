// src/app/guards/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn()) {
      return true; // Nếu đã đăng nhập, cho phép truy cập
    } else {
      alert('Bạn cần đăng nhập để truy cập trang này!');
      this.router.navigate(['/auth']); // Chuyển hướng đến trang đăng nhập nếu chưa đăng nhập
      return false;
    }
  }
}
