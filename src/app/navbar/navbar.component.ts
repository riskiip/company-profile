import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  navbarfixed: boolean = false;
  menuClicked = false;

  @Output() navEmitter = new EventEmitter();
  @Output() arrowEmitter = new EventEmitter();

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 100) {
      this.navbarfixed = true;
      this.arrowEmitter.emit(true);
    } else {
      this.navbarfixed = false;
      this.arrowEmitter.emit(false);
    }
  }

  onNavClicked(anchor: string) {
    this.navEmitter.emit(anchor);
  }

  onMenuClicked() {
    this.menuClicked = !this.menuClicked;
  }
}
