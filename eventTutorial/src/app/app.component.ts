import { Component,ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { NavController } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import firebase from 'firebase';

@Component({
   templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav') nav: NavController
  rootPage: any = LoginPage;

  constructor(platform: Platform) {
    firebase.initializeApp({
      apiKey: "AIzaSyCS_5i8WjycbIFzFMdyzlj7q8Gh2FvNGeg",
      authDomain: "app-cliente-servidor-firebase.firebaseapp.com",
      databaseURL: "https://app-cliente-servidor-firebase.firebaseio.com",
      storageBucket: "app-cliente-servidor-firebase.appspot.com",
      messagingSenderId: "1031501350909"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.nav.setRoot(HomePage);
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

