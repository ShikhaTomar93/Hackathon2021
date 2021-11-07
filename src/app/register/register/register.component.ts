import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() registr: EventEmitter<any> = new EventEmitter<any>();
  flw:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  changeStatus(){
    this.flw = !this.flw;
  }
  register(){
    this.registr.emit(true)
  }
}
