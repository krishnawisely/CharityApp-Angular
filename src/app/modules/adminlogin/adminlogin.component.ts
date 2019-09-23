import { Component, OnInit } from '@angular/core';
import { AdminloginService } from 'src/app/core/admin/adminlogin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private adminservice:AdminloginService) { }

  private email:string;
  private password:string;

  ngOnInit() {
  }

  adminLogin()
  {
    this.adminservice.adminLogin(this.email,this.password).subscribe( (res)=>{
      console.log(res);
    });
    console.log("admin login is works"+this.email+"-"+this.password);
  }

}
