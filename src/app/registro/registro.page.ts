import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(private router: Router, public fb: FormBuilder, private alertController: AlertController) {
    this.formularioLogin = this.fb.group({
      'usuario': new FormControl("", Validators.required),
      'contrasena': new FormControl("", Validators.required),
      'confirmar_contrasena': new FormControl("", Validators.required)
    })
  }
  ngOnInit() {
  }

  async registrar() {
    var f = this.formularioLogin.value;

    if (this.formularioLogin.invalid) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Debes ingresar todos los datos',
        buttons: ['OK']
      });

      await alert.present();
      return;
    } else if (f.contrasena != f.confirmar_contrasena) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Las contraseñas no coinciden',
        buttons: ['OK']
      });

      await alert.present();
      return;
    } else {
      var nombreUsuario = f.usuario;
      var contrasenaUsuario = f.contrasena;

      localStorage.setItem('nombreUsuario', nombreUsuario);
      localStorage.setItem('contrasenaUsuario', contrasenaUsuario);

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

      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Registrado correctamente',
        buttons: ['OK']
      });

      await alert.present();
      this.router.navigate(["/login"]);
    }
  }

}
