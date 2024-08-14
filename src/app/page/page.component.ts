import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { GovermentComponent } from '../goverment/goverment.component';
import { HomeComponent } from '../home/home.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { PartnersComponent } from '../partners/partners.component';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [
    NavbarComponent,
    HomeComponent,
    ProductComponent,
    AboutComponent,
    PartnersComponent,
    ContactComponent,
    FooterComponent,
    GovermentComponent,
    CommonModule,
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
})
export class PageComponent {
  showArrow = false;

  constructor(private viewPortScroller: ViewportScroller) {}

  navHandling(anchor: string) {
    this.viewPortScroller.scrollToAnchor(anchor);
  }

  arrowHandling(showArrow: boolean) {
    this.showArrow = showArrow;
  }

  onArrowClick() {
    window.scroll(0, 0);
  }
}
