import { RouterModule, Routes } from "@angular/router";
import { AppDashboardComponent } from "./app-dashboard/app-dashboard.component";

const APP_ROUTING : Routes = [
    {path:'', redirectTo:'/dashboard',pathMatch:'full'},
    {path:'dashboard', component:AppDashboardComponent}
];

export const AppRoutingModule = RouterModule.forRoot(APP_ROUTING);
