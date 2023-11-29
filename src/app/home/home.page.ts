import { Component, OnInit } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  useQR: any;
  qrDisable: any;
  active: boolean = false;

  constructor() {}

  ngOnInit() {
    if (this.active) {
      this.useQR = this.generateQRCode('321654', 300);
    } else {
      this.useQR= this.generateQRCode('0', 300);
    }
    console.log(this.useQR)
  }


  generateQRCode(sede_id: string, size: number): string {
    const canvas = document.createElement('canvas');
      QRCode.toCanvas(canvas, sede_id, { width: size }, (error: any) => {
        if (error) {
          console.error(error);
        }
      });
    return canvas.toDataURL('image/png');
  }
}
