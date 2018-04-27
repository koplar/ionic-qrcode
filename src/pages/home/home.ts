import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/** Tambahan */
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
/** --- */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  qrData = null;
  createdQrCode = null;
  scannedQrCode = null;

  constructor(public navCtrl: NavController,
  public barcodeScanner : BarcodeScanner) {

  }

  // membuat QR Code
  createQRCode() : void {
    this.createdQrCode = this.qrData
  }

  // menscan qrdata
  scanQRCode() : void{
    this.barcodeScanner.scan()
      .then(barcodeData => {
        this.scannedQrCode = barcodeData.text;
      }, (error) => {
        console.log('Scan Error : ', error);
      });
  }

}
