import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @Output() aboutEmitter = new EventEmitter();

  onAboutClick(anchor: string) {
    this.aboutEmitter.emit(anchor);
  }
}
