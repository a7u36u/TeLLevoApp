import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
 
 
  map: any;

  constructor() {

   }

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    var myLatlng = new google.maps.LatLng( -33.69395059847024, -71.2143591675589); 
    
    var mapOptions = {
      zoom: 22,
      center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
    var marker = new google.maps.Marker({
        position: myLatlng
    });
    
    marker.setMap(map);
  }

}
