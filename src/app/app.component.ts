import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

import { ParkData } from '../providers/park-data'; 

@Component({
  templateUrl: 'app.html',
  providers: [ ParkData ]
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, public parkData: ParkData) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      
    });
  
    parkData.load();
  }
}
