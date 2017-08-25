import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { Md2Module } from "md2";
import { AppRoutingModule } from "./app.routing";
import "hammerjs";

import { DataTablePipe } from "./_shared/data-table.pipe";
import { AppComponent } from './app.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { PetsDetailsComponent } from './pets-details/pets-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AppDashboardComponent,
    LoginComponent,
    SettingsComponent,
    PetsDetailsComponent,
    DataTablePipe
  ],
  imports: [
    BrowserModule,MaterialModule,BrowserAnimationsModule,FlexLayoutModule,AppRoutingModule,
    Md2Module,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
