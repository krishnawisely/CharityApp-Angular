import { Component, OnInit } from '@angular/core';
import { DonorloginService } from 'src/app/core/donor/donorlogin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-donorlogin',
  templateUrl: './donorlogin.component.html',
  styleUrls: ['./donorlogin.component.css']
})
export class DonorloginComponent implements OnInit {

  constructor( 
    private loginservice:DonorloginService, 
    private router:Router 
    ) { }

  private email:string;
  private password:string;

  ngOnInit() {
  }

  donorLogin()
  {
    this.loginservice.donorLogin(this.email,this.password).subscribe( (res)=> {
      console.log(res);
      if(res.errorMessage == null)
      {
        this.router.navigate(['./home']);
      }
    });
  }

}
