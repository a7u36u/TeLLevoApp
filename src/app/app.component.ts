import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Share } from '@capacitor/share';
import { MenuController } from '@ionic/angular'; 
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',

  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  nombreUsuario = localStorage.getItem('nombreUsuario');

  public appPages = [
    { title: 'Home', url: '/home', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(public router: Router, private menu: MenuController, private alertController: AlertController) {}

  

  toggleTheme(event: any){
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark')
    }else{
      document.body.setAttribute('color-theme','light')
    }
  }

  compartirApp() {
    Share.share({
      title: 'Compartir myApp',
      url: 'https://bilbaolabs.cl/',
      dialogTitle: 'Es perfecta !',
    });
  }

  abrirMapa() {
    this.router.navigate(["/mapa"]);
    this.menu.close();
  }

 

  async cerrarSesion(){
    localStorage.removeItem('autenticado');
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: 'Sesion Cerrada Correctamente',
      buttons: ['OK']
    });

    await alert.present();
    this.router.navigate(["/login"]);
    this.menu.close();
  }
}
