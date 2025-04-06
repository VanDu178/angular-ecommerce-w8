import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = []; // Mảng lưu trữ các sản phẩm trong giỏ hàng

  constructor() {}

  // Thêm sản phẩm vào giỏ hàng
  addToCart(product: any) {
    alert(`${product.name} đã được thêm vào giỏ hàng!`);
    const existingProduct = this.cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    console.log(this.cartItems);
  }

  // Lấy tất cả các sản phẩm trong giỏ hàng
  getCartItems() {
    return this.cartItems;
  }

  // Tính tổng giá trị giỏ hàng
  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // Lấy số lượng sản phẩm trong giỏ hàng
  getCartItemCount(): number {
    alert("kich hoat")
    return this.cartItems.reduce((count, item) => count + item.quantity, 0);
  }
}
