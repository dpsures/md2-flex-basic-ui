import { RouterModule, Routes } from "@angular/router";
import { AppDashboardComponent } from "./app-dashboard/app-dashboard.component";
import { LoginComponent } from "./login/login.component";
import { SettingsComponent } from "./settings/settings.component";

const APP_ROUTING : Routes = [
    {path:'', redirectTo:'/login',pathMatch:'full'},
    {path:'dashboard', component:AppDashboardComponent},
    {path:'login',component:LoginComponent},
    {path:'settings',component:SettingsComponent}
];

export const AppRoutingModule = RouterModule.forRoot(APP_ROUTING);
