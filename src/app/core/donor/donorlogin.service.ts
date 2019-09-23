import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonorloginService {

  constructor( private http:HttpClient ) { }

   private apiUrl:any = "http://localhost:8080/CharityApplication/";

  public donorLogin(email:string,password:string):any
  {
    let formData = "DonorLoginServlet?email="+email+"&password="+password;
    return this.http.get(this.apiUrl+formData); 
  }
}
