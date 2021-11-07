
import { Component, OnInit } from '@angular/core';

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
  isFeedback:false;
  constructor() { }

  ngOnInit() {
  }
  chooseField(e){
    this.showDoctors = true;
    console.log(this.doctors)
  }
  bookappointment(){
    this.isModel = true
  }
  giveFeedback(){
    this.isFeedback = true;
  }
  close(){
    this.isModel = false;
    this.isFeedback = false;
  }
  bookAppoin(){
    this.isModel = false;
    alert('Appointment Booked Successfully!!')
  }
  saveFeedback(){
    this.isFeedback = false;
    alert('Feedback saved Successfully!!')
  }
}
