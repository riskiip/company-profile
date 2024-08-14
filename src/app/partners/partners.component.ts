import {
  Component,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { DialogService } from '../dialog/dialog.service';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss',
})
export class PartnersComponent implements OnDestroy {
  cityName = '';
  cityImage: string[] = [];

  constructor(private modalService: DialogService) {}
  @ViewChild('modal', { read: ViewContainerRef })
  entry!: ViewContainerRef;
  sub!: Subscription;

  openPin(city: string) {
    switch (city) {
      case 'jakarta':
        this.cityName = 'Jakarta';
        this.cityImage = [
          'https://i.ibb.co.com/9htRrH1/jakarta.png',
          'https://i.ibb.co.com/7X1mr55/sma-unggulan-jakarta.jpg',
          'https://i.ibb.co.com/hL6B594/stip-jakarta.jpg',
        ];
        break;
      case 'palembang':
        this.cityName = 'Palembang';
        this.cityImage = ['https://i.ibb.co.com/z79wrN7/lahat.png'];
        break;
      case 'gorontalo':
        this.cityName = 'Gorontalo';
        this.cityImage = [
          'https://i.ibb.co.com/09nXcCs/gorut.jpg',
          'https://i.ibb.co.com/JRttfT3/ung.jpg',
        ];
        break;
      case 'makasar':
        this.cityName = 'Makasar';
        this.cityImage = ['https://i.ibb.co.com/LkQxRLz/ith.jpg'];
        break;
      case 'manado':
        this.cityName = 'Manado';
        this.cityImage = ['https://i.ibb.co.com/J3xZMrt/unm.png'];
        break;
      case 'kaltim':
        this.cityName = 'Kalimantan Timur';
        this.cityImage = [
          'https://i.ibb.co.com/KbMHTZW/kutai.png',
          'https://i.ibb.co.com/9wb0Y6v/penajam.jpg',
        ];
        break;
      case 'malang':
        (this.cityName = 'Malang'),
          (this.cityImage = [
            'https://i.ibb.co.com/8Pp18Hd/polinema.png',
            'https://i.ibb.co.com/Qff7T28/kotasura.png',
          ]);
        break;
      default:
        break;
    }

    this.sub = this.modalService
      .openModal(this.entry, this.cityName, this.cityImage)
      .subscribe((v) => {
        //your logic
      });
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}
