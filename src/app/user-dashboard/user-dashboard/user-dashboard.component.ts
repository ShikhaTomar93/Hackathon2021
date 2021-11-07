import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  items=['Physicians','Psychiatrists','Obstetricians','Gynecologists','Neurologists','Radiologists']
  doctors=[{'name':'Dr. John Doe','degree':'MBBS, MD'},
          {'name':'Dr. Malani','degree':'MBBS, MD'},
          {'name':'Dr. Alex','degree':'MBBS, MD'},
          {'name':'Dr. Jacob','degree':'MBBS, MD'}]
  showDoctors:boolean=false
  isModel = false;
  dateTime
  isFeedback:boolean=false;
  isMedi:boolean=false
  url = 'https://mail.google.com/chat/u/0/#chat/welcome';
  constructor(private sanitizer: DomSanitizer,private Router:Router) { }

  ngOnInit() {
    //this.newurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url)
    this.Router.navigate([this.url]);
  }
  chooseField(e): void{
    this.showDoctors = true;
    console.log(this.doctors)
  }
  bookappointment(){
    this.isModel = true
  }
  openMedi(){
    this.isMedi = true
  }
  close(){
    this.isModel = false;
    this.isFeedback = false;
    this.isMedi = false
  }
  bookAppoin(){
    this.isModel = false;
    alert('Appointment Booked Successfully!!')
  }
  saveFeedback(){
    this.isFeedback = false;
    alert('Feedback saved Successfully!!')
  }
  giveFeedback(){
    this.isFeedback = true;
  }
}
