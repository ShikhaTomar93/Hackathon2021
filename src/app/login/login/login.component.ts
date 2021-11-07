import { Router, RouterModule } from '@angular/router';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import {AgmMap,MapsAPILoader  } from '@agm/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild(AgmMap,{static: true}) public agmMap: AgmMap;
  initialPage:boolean = true;
  existingUser:boolean = false;
  newUser:boolean = false;
  dashboard:boolean = false;
  pageChange:boolean = false;
  flw:boolean = false;
  latitude: any;
  longitude: any;
  lat: any;
  lng: any;
  address: any;
  private geoCoder;
  zoom: number;
  chatOpen: boolean;
  constructor(private router: Router, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  ngOnInit() {
    this.newUser = false;
    this.existingUser = false;
    this.initialPage = true;
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
    });
  }
  changeStatus(){
    this.flw = !this.flw;
  }
  buttonClick(label){
    if(label == 'new'){
      this.newUser = true;
    }
    else{
      this.existingUser = true;
    }
    this.initialPage = false;
  }
  submitLogin(){
    this.dashboard = true;
    this.existingUser = false;
    this.pageChange = true
    }
    registr(e){
      if(e)
      this.dashboard = true;
      this.newUser = false;
    }
    private setCurrentLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 8;
          this.getAddress(this.latitude, this.longitude);
        });
      }
    }
    
    getAddress(latitude, longitude) {
      this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
        if (status === 'OK') {
          if (results[0]) {
            this.lat=latitude;
            this.longitude = longitude;
            this.zoom = 12;
            this.address = results[0].formatted_address;
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
        console.log(this.lat)
      });
      
    }
    openChat(){
      this.chatOpen = true
    }
  }