import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  nombreUsuario = localStorage.getItem('nombreUsuario');

  weatherTemp:any
  todayDate = new Date()
  cityName :any
  weatherIcon:any
  weatherDetails:any

  constructor(public httpClient:HttpClient) { 
    this.loadData() 
  }

  loadData(){
    this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${"Melipilla"}&appid=4651d8345fb902a1bf5b11f5db801ae2`).subscribe(results => {
      console.log(results);
      this.weatherTemp = results['main']
      this.cityName = results['name']
      console.log(this.weatherTemp);
      this.weatherDetails = results['weather'][0]
      console.log(this.weatherDetails); 
      this.weatherIcon = `https://openweathermap.org/img/wn/${this.weatherDetails.icon}@4x.png`
    })
  }


  ngOnInit() {
  }

}
