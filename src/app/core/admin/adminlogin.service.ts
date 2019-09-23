import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  constructor(private http:HttpClient) { }

  urlData="http://localhost:8080/CharityApplication/";

  public adminLogin(email:string,password:string):any
  {
    let formData:string ="email="+email+"&password="+password;
    return this.http.get(this.urlData+"AdminLoginServlet?"+formData);
  }

}
