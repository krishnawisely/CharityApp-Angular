import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { DonorloginComponent } from './modules/donorlogin/donorlogin.component';
import { AdminloginComponent } from './modules/adminlogin/adminlogin.component';


const routes: Routes = [
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  },
  {
    path:"donorLogin",
    component: DonorloginComponent
  },
  {
    path:"adminLogin",
    component: AdminloginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
