import { RouterModule, Routes } from "@angular/router";
import { AppDashboardComponent } from "./app-dashboard/app-dashboard.component";
import { LoginComponent } from "./login/login.component";

const APP_ROUTING : Routes = [
    {path:'', redirectTo:'/login',pathMatch:'full'},
    {path:'dashboard', component:AppDashboardComponent},
    {path:'login',component:LoginComponent}
];

export const AppRoutingModule = RouterModule.forRoot(APP_ROUTING);
