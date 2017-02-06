import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ParkDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-park-details',
  templateUrl: 'park-details.html'
})
export class ParkDetailsPage {
  parkInfo: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.parkInfo = navParams.data.parkData;
    console.log(this.parkInfo);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParkDetailsPage');
  }

}
