import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  initialPage:boolean = true;
  existingUser:boolean = false;
  newUser:boolean = false;
  dashboard:boolean = false;
  pageChange:boolean = false;
  constructor(private router: Router,) { }

  ngOnInit() {
    this.newUser = false;
    this.existingUser = false;
    this.initialPage = true;
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
  }