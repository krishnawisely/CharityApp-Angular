import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor() { }

  private email:string;
  private password:string;

  ngOnInit() {
  }

  adminLogin()
  {
    console.log("admin login is works"+this.email+"-"+this.password);
  }

}
