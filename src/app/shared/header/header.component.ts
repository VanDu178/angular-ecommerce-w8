import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service'; // Import CartService
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule } from '@angular/router'; // 👈 PHẢI CÓ
import { AuthService } from '../../services/auth.service'; // Import AuthService
import { Router } from '@angular/router'; // Import Router để điều hướng

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule], // Đưa CommonModule vào imports
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItemCount: number = 0;
  isLoggedIn: boolean = false; // Biến kiểm tra trạng thái đăng nhập

  constructor(private cartService: CartService,private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.cartItemCount = this.cartService.getCartItemCount(); // Lấy số lượng sản phẩm trong giỏ
    this.isLoggedIn = this.authService.isLoggedIn(); // Kiểm tra trạng thái đăng nhập
  }


  logout() {
    this.authService.logout(); // Đăng xuất người dùng và xóa trạng thái trong localStorage
    this.router.navigate(['/']); // Chuyển hướng về trang chủ
  }
}
