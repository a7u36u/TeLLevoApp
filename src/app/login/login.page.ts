import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, private alertController: AlertController, private router: Router) {
    this.formularioLogin = this.fb.group({
      'usuario': new FormControl("", Validators.required),
      'contrasena': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {

  }

  async ingresar() {
    
    var f = this.formularioLogin.value;

    var nombreUsuario = localStorage.getItem('nombreUsuario');
    var contrasenaUsuario = localStorage.getItem('contrasenaUsuario');


    if (f.usuario.length < 4 || f.usuario.length > 12) {
      const alert = await this.alertController.create({
        header: 'Alerta',
        message: 'El usuario debe tener entre 4 y 12 caracteres',
        buttons: ['OK']
      });
  
      await alert.present();
      return;
    }

    if (f.contrasena.length < 4 || f.contrasena.length > 8) {
      const alert = await this.alertController.create({
        header: 'Alerta',
        message: 'La contraseña debe tener entre 4 y 8 caracteres',
        buttons: ['OK']
      });
  
      await alert.present();
      return;
    }


    if (this.formularioLogin.invalid) {
      const alert = await this.alertController.create({
        header: 'Alerta',
        message: 'Datos Incorrectos!',
        buttons: ['Cerrar']
      });

      await alert.present();
      return;

    } else if (nombreUsuario == f.usuario && contrasenaUsuario == f.contrasena) {
      localStorage.setItem('autenticado', 'true');
      this.router.navigate(["/home"]);
    } else {
      const alert = await this.alertController.create({
        header: 'Mensaje',  
        message: 'Datos incorrectos',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }
  }
}