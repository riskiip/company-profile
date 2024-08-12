import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { PartnersComponent } from './partners/partners.component';
import { ContactComponent } from './contact/contact.component';

import { FooterComponent } from './footer/footer.component';
import { GovermentComponent } from './goverment/goverment.component';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
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
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
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
