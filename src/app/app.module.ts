import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import { HomeComponent } from './modules/home/home.component';
import { DonorloginComponent } from './modules/donorlogin/donorlogin.component';
import { FormsModule } from '@angular/forms';
import { AdminloginComponent } from './modules/adminlogin/adminlogin.component';
import { HttpClientModule } from '@angular/common/http';
import { DonorloginService } from './core/donorlogin.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    DonorloginComponent,
    AdminloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DonorloginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
