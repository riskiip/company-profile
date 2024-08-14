import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  constructor(private router: Router) {}

  productThumbnails = [
    {
      src: '../../assets/product/electrical-engineering.jpg',
      alt: 'electrical-engineering',
    },
    {
      src: '../../assets/product/mechatronic.jpg',
      alt: 'mechatronic',
    },
    {
      src: '../../assets/product/oil-module.jpg',
      alt: 'oil-pumping-module',
    },
    {
      src: '../../assets/product/acer-tkdn.jpg',
      alt: 'laptop-acer',
    },
    {
      src: '../../assets/product/zyrex-tkdn.jpeg',
      alt: 'laptop-zyrex',
    },
    {
      src: '../../assets/product/smartboard.jpeg',
      alt: 'smartboard',
    },
    {
      src: '../../assets/product/meja-paud.jpg',
      alt: 'meja-paud',
    },
    {
      src: '../../assets/product/paud1.jpg',
      alt: 'paud',
    },
  ];

  navigateAllProduct() {
    this.router.navigate(['/products']);
  }
}
