import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './all-product.component.html',
  styleUrl: './all-product.component.scss',
})
export class AllProductComponent {
  showArrow = false;

  products = [
    {
      category: 'University',
      images: [
        '../../assets/product/electrical-engineering.jpg',
        '../../assets/product/industrial-module.jpg',
        '../../assets/product/mechatronic.jpg',
        '../../assets/product/oil-module.jpg',
        '../../assets/product/water-supply.jpg',
        '../../assets/product/ev-training-set.jpg',
      ],
    },
    {
      category: 'Hardware',
      images: [
        '../../assets/product/smartboard.jpeg',
        '../../assets/product/zyrex-tkdn.jpeg',
        '../../assets/product/acer-tkdn.jpg',
      ],
    },
    {
      category: 'Sport',
      images: [
        '../../assets/product/baseball.jpg',
        '../../assets/product/net bola.jpg',
        '../../assets/product/pickleball.jpg',
        '../../assets/product/arrow.png',
      ],
    },
    {
      category: 'PAUD',
      images: [
        '../../assets/product/meja-paud.jpg',
        '../../assets/product/kursi-paud.jpg',
        '../../assets/product/kursi-paud2.jpg',
        '../../assets/product/paud.png',
        '../../assets/product/paud2.jpg',
      ],
    },
    {
      category: 'Furniture SD / SMP / SMA',
      images: [
        '../../assets/product/kursi-meja.jpg',
        '../../assets/product/kursi.jpeg',
      ],
    },
    {
      category: 'KIT Alat Peraga',
      images: [
        '../../assets/product/kit1.jpeg',
        '../../assets/product/kit2.jpeg',
        '../../assets/product/kit3.jpeg',
        '../../assets/product/kit4.jpeg',
      ],
    },
    {
      category: 'Management System',
      images: [
        '../../assets/product/sekolah.png',
        '../../assets/product/kampus.jpg',
      ],
    },
  ];

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 100) {
      this.showArrow = true;
    } else {
      this.showArrow = false;
    }
  }

  onArrowClick() {
    window.scroll(0, 0);
  }
}
