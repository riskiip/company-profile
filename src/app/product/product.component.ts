import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
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
}
