// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInKey = 'isLoggedIn'; // Key dùng để lưu trữ trạng thái đăng nhập

  constructor() {}

  // Kiểm tra trạng thái đăng nhập từ localStorage
  isLoggedIn(): boolean {
    const storedStatus = localStorage.getItem(this.loggedInKey);
    return storedStatus === 'true'; // Trả về true nếu người dùng đã đăng nhập
  }

  // Đánh dấu người dùng đã đăng nhập và lưu trữ trạng thái vào localStorage
  login() {
    localStorage.setItem(this.loggedInKey, 'true'); // Lưu trạng thái đăng nhập
  }

  // Đánh dấu người dùng đã đăng xuất và xóa trạng thái đăng nhập
  logout() {
    localStorage.removeItem(this.loggedInKey); // Xóa trạng thái đăng nhập
  }
}
