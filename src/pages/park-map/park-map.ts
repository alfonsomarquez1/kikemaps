import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

/*
  Generated class for the ParkMap page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-park-map',
  templateUrl: 'park-map.html'
})
export class ParkMapPage {
  map: google.maps.Map;
  
  constructor(public navCtrl: NavController, public platform: Platform) {
    this.map = null;
    this.platform.ready().then(() => {
      this.initializeMap();
    });
  }

  initializeMap() {
    let minZoomLevel = 3;

    this.map = new google.maps.Map(document.getElementById('map_canvas'), {
      zoom: minZoomLevel,
      center: new google.maps.LatLng(39.833, -98.583),
      mapTypeControl: false,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ParkMapPage');
  }

}
