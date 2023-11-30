import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '@angular/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  nombreUsuario = localStorage.getItem('nombreUsuario');


  // router: any;

  // constructor(private authService: AuthService) { }

  

  ngOnInit() {
  }

  // logout():void {
  //     this.authService.cerrarSesion();
  //   }
}
