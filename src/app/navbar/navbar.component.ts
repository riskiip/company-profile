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
  @Output() navEmitter = new EventEmitter();

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 100) {
      console.log('sticky navbar');
      this.navbarfixed = true;
    } else {
      console.log('nope');
      this.navbarfixed = false;
    }
  }

  onNavClicked(anchor: string) {
    this.navEmitter.emit(anchor);
  }
}
