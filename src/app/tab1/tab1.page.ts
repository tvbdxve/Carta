import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['diseños.css']
})
export class Tab1Page {

  constructor(private alertcontroller: AlertController) {}
  async presentAlert(){
      const alert = await this.alertcontroller.create({
        header: 'Alert',
        subHeader: 'Iniciar Sesión',
        message: 'Primero debes iniciar sesión',
        buttons: ['OK']
      });
    
      await alert.present();
    }
  }


