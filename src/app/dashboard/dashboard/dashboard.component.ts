import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers:[HttpClient]
})
export class DashboardComponent implements OnInit {
  userData:any
  schedule:any
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("assets/get_sample_data.json", {responseType: 'text'}).subscribe(data =>{
      console.log(data);
      this.userData = data;
      this.schedule = this.userData["schedule"]
    })
  }

}
