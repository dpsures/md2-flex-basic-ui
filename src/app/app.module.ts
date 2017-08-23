import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app.routing";
import "hammerjs";

import { AppComponent } from './app.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AppDashboardComponent
  ],
  imports: [
    BrowserModule,MaterialModule,BrowserAnimationsModule,FlexLayoutModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
